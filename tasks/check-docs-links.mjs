import fs from 'fs/promises';
const cssdbJsonURL = new URL('../cssdb.json', import.meta.url);

const features = await fs.readFile(cssdbJsonURL, 'utf8').then(JSON.parse);

for (const feature of features) {
	if (!feature.docs && feature.vendors_implementations > 0) {
		console.log(`No docs for "${feature.id}" with ${feature.vendors_implementations} vendors implementing`);
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
			} else {
				console.log(`Bad response for "${feature.id}" when checking "${provider}" docs:\n    ${resp.status} ${resp.statusText}`);
			}
		}
	}
}

process.exit(0)
