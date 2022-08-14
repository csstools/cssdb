import fs from 'fs/promises';
import { html } from '../util/html.mjs';
import { renderFeature } from './feature.mjs';

const cssdbURL = new URL('../../cssdb.json', import.meta.url);
const cssdbSettingsURL = new URL('../../cssdb.settings.json', import.meta.url);

const cssdb = await fs.readFile(cssdbURL, 'utf8').then(JSON.parse);
const cssdbSettings = await fs.readFile(cssdbSettingsURL, 'utf8').then(JSON.parse);

export function renderFeatures() {
	const features = cssdbSettings.map((feature, index) => ({ ...feature, ...cssdb[index] }))
		.sort((a, b) => b.stage - a.stage || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
		.filter(feature => feature.stage >= 0);

	return html`
		<main class="cssdb-features" id="features">
			${features.map((feature) => {
				return renderFeature(feature);
			}).join('')}
		</main>
	`;
}
