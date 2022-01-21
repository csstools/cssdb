import path from 'path';
import { URL } from 'url';
import fs from 'fs/promises';
import supportedBrowsersFromCanIUse from '../utils/supported-browsers-from-caniuse.mjs';
import supportedBrowsersFromMdn from '../utils/supported-browsers-from-mdn.mjs';
import countVendors from '../utils/count-vendors.mjs';

const __dirname = new URL('.', import.meta.url).pathname;
const settingsPath = path.resolve(__dirname, '../cssdb.settings.json');
const cssdb = await fs.readFile(settingsPath, 'utf8').then(JSON.parse);

cssdb.forEach(feature => {
	feature.browser_support = {};

	if (feature.caniuse) {
		feature.browser_support = supportedBrowsersFromCanIUse(feature.caniuse, feature);
	} else if (feature.mdn_path) {
		feature.browser_support = supportedBrowsersFromMdn(feature.mdn_path, feature);
	}

	feature.vendors_implementations = countVendors(feature);
});

const cleanDB = cssdb.map(
	({
		 example,
		 caniuse,
		 caniuse_compat,
		 mdn_path,
		 allow_partial_implementation,
		 // The above are discarded
		 ...properties
	 }) => properties
);

const newCSSDB = `${JSON.stringify(cleanDB, null, 2)}\n`;
const esmCSSDB = `export default ${newCSSDB}\n`;

await Promise.all([
	fs.writeFile(path.resolve(__dirname, '../cssdb.json'), newCSSDB),
	fs.writeFile(path.resolve(__dirname, '../cssdb.mjs'), esmCSSDB)
]);
