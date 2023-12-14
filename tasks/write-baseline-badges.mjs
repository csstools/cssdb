import fs from 'fs/promises';
import { baselineIcon, baselineStatus } from '../utils/baseline-status.mjs';
const cssdbJsonURL = new URL('../cssdb.json', import.meta.url);
const badgesDirURL = new URL('../public/images/badges-baseline/', import.meta.url);

const features = await fs.readFile(cssdbJsonURL, 'utf8').then(JSON.parse);

function renderBadgeSVG(feature) {
	return baselineIcon(baselineStatus(feature));
}

await fs.rm(badgesDirURL, { force: true, recursive: true });
await fs.mkdir(badgesDirURL);

await Promise.all(features.map(async feature => {
	const shield = renderBadgeSVG(feature)

	const badgeURL = new URL(`../public/images/badges-baseline/${feature.id}.svg`, import.meta.url);

	return Promise.all([
		fs.writeFile(badgeURL, shield),
	]);
}));
