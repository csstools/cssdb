import fs from 'fs/promises';
import webFeatures from 'web-features';

const cssdbJsonURL = new URL('../cssdb.settings.json', import.meta.url);

const features = await fs.readFile(cssdbJsonURL, 'utf8').then(JSON.parse);

let hasBadLinks = false;
let hasMissingDocs = false;

for (const feature of features) {
	if (feature['web-feature']) {
		continue;
	}

	if (!feature.mdn_path) {
		continue;
	}

	const mdn_paths = new Set(Array.isArray(feature.mdn_path) ? feature.mdn_path : [feature.mdn_path]);

	for (const webFeatureName in webFeatures) {
		const webFeature = webFeatures[webFeatureName];
		if (!webFeature.compat_features) {
			continue;
		}

		for (const compatFeature of webFeature.compat_features) {
			if (mdn_paths.has(compatFeature)) {
				console.log(`${feature.id}: found ${compatFeature} in ${webFeatureName}`);
			}
		}
	}
}

if (hasBadLinks || hasMissingDocs) {
	process.exit(1);
}

process.exit(0);
