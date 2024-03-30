import fs from 'fs/promises';
import cssdb from 'cssdb';
import { baselineIcon, baselineStatus } from '../utils/baseline-status.mjs';
const badgesDirURL = new URL('../public/images/badges-baseline/', import.meta.url);

await fs.rm(badgesDirURL, { force: true, recursive: true });
await fs.mkdir(badgesDirURL);

await Promise.all(cssdb.map((feature) => {
	const shield = baselineIcon(...baselineStatus(feature));

	const badgeURL = new URL(`../public/images/badges-baseline/${feature.id}.svg`, import.meta.url);

	return Promise.all([
		fs.writeFile(badgeURL, shield),
	]);
}));
