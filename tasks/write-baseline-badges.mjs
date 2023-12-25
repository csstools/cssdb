import fs from 'fs/promises';
import { baselineIcon, baselineStatus } from '../utils/baseline-status.mjs';
const cssdbJsonURL = new URL('../cssdb.json', import.meta.url);
const badgesDirURL = new URL('../public/images/badges-baseline/', import.meta.url);

const features = await fs.readFile(cssdbJsonURL, 'utf8').then(JSON.parse);

await fs.rm(badgesDirURL, { force: true, recursive: true });
await fs.mkdir(badgesDirURL);

await Promise.all(features.map((feature) => {
	const shield = baselineIcon(...baselineStatus(feature));

	const badgeURL = new URL(`../public/images/badges-baseline/${feature.id}.svg`, import.meta.url);

	return Promise.all([
		fs.writeFile(badgeURL, shield),
	]);
}));
