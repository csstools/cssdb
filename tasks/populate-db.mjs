import path from 'path';
import { URL } from 'url';
import fs from 'fs/promises';
import supportedBrowsersFromCanIUse from '../utils/supported-browsers-from-caniuse.mjs';
import calculateStage from '../utils/calculate-stage.mjs';

const __dirname = new URL('.', import.meta.url).pathname;
const settingsPath = path.resolve(__dirname, '../cssdb.settings.json');
const cssdb = await fs.readFile(settingsPath, 'utf8').then(JSON.parse);

cssdb.forEach(feature => {
	feature.browser_support = {};

	if (feature.caniuse) {
		feature.browser_support = supportedBrowsersFromCanIUse(feature.caniuse);
	} else if (feature.caniuse_compat) {
		feature.browser_support = feature.caniuse_compat;
	}

	feature.spec_stage = feature.stage;
	feature.stage = calculateStage(feature);
});
