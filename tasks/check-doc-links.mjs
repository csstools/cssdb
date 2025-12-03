import fs from "node:fs/promises"

const cssdb = JSON.parse(await fs.readFile('cssdb.settings.json'), 'utf-8');

let hasBadLinks = false;
let hasMissingDocs = false;

for (const feature of cssdb) {
	if (!feature.docs && feature.vendors_implementations > 0) {
		console.log(`No docs for "${feature.id}" with ${feature.vendors_implementations} vendors implementing`);
		hasMissingDocs = true;
	}

	if (!feature.docs) {
		continue;
	}

	for (const provider in feature.docs) {
		const url = feature.docs[provider];

		const resp = await fetch(url, {
			redirect: 'manual'
		});

		if (!resp.ok) {
			if (resp.status === 301) {
				console.log(`Bad response for "${feature.id}" when checking "${provider}" docs:\n    "${new URL(resp.headers.get('location'), url).href}"`);
				feature.docs[provider] = new URL(resp.headers.get('location'), url).href;
				hasBadLinks = true;
			} else {
				console.log(`Bad response for "${feature.id}" when checking "${provider}" docs:\n    ${resp.status} ${resp.statusText}`);
				hasBadLinks = true;
			}
		}
	}
}

// await fs.writeFile('cssdb.settings.json', JSON.stringify(cssdb, null, '  '))

if (hasBadLinks || hasMissingDocs) {
	process.exit(1);
}

process.exit(0);
