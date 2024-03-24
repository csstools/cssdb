import path from 'path';
import { URL } from 'url';
import fs from 'fs/promises';
import supportedBrowsersFromMdn from '../utils/supported-browsers-from-mdn.mjs';
import { baselineData } from '../utils/baseline-data.mjs';
import applyBrowserOverrides from '../utils/apply-browser-overrides.mjs';
import { applyWebFeaturesData } from '../utils/web-features-data.mjs';

const __dirname = new URL('.', import.meta.url).pathname;
const settingsPath = path.resolve(__dirname, '../cssdb.settings.json');
const cssdb = await fs.readFile(settingsPath, 'utf8').then(JSON.parse);

cssdb.forEach(applyWebFeaturesData);

cssdb.forEach(feature => {
	feature.browser_support = {};
	let browser_support = {};
	if (feature.mdn_path) {
		browser_support = supportedBrowsersFromMdn(feature.mdn_path, feature);
	}

	const browsers = Object.keys(browser_support).sort();
	browsers.forEach(browser => {
		feature.browser_support[browser] = browser_support[browser];
	});

	feature.browser_support = applyBrowserOverrides(
		feature.id,
		feature.browser_support,
		feature.browser_support_overrides
	);

	const [vendors_implementations, interoperable_at] = baselineData(feature);
	feature.vendors_implementations = vendors_implementations;
	feature.interoperable_at = interoperable_at;
});

const cleanDB = cssdb.map(
	({
		mdn_path,
		allow_partial_implementation,
		mdn_count_prefixed_as_supported,
		browser_support_overrides,
		// The above are discarded
		...properties
	}) => {
		let feature = {};
		let sortedKeys = Object.keys(properties).sort((a, b) => {
			const fixedKeyPositions = ['id', 'title', 'description', 'specification', 'stage'];
			const aIndex = fixedKeyPositions.indexOf(a);
			const bIndex = fixedKeyPositions.indexOf(b);

			if (aIndex === -1 && bIndex === -1) {
				return a.localeCompare(b);
			}

			if (aIndex === -1) {
				return 1;
			}

			if (bIndex === -1) {
				return -1;
			}

			return aIndex - bIndex;
		});
		sortedKeys.forEach(key => {
			feature[key] = properties[key];
		});

		return feature;
	}
);

const newCSSDB = `${JSON.stringify(cleanDB, null, 2)}\n`;
const esmCSSDB = `export default ${newCSSDB}`;

await Promise.all([
	fs.writeFile(path.resolve(__dirname, '../cssdb.json'), newCSSDB),
	fs.writeFile(path.resolve(__dirname, '../cssdb.mjs'), esmCSSDB)
]);
