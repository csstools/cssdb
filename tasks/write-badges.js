import fs from 'fs/promises';
import { polyfill } from '@astropub/webapi';

polyfill(globalThis);

const cssdbJsonURL = new URL('../cssdb.json', import.meta.url);
const badgesDirURL = new URL('../public/images/badges/', import.meta.url);

const features = await fs.readFile(cssdbJsonURL, 'utf8').then(JSON.parse);

const colors = [
	'414141',
	'ed782a',
	'899c1f',
	'3e7817',
	'005a9c'
];

await fs.rm(badgesDirURL, { force: true, recursive: true });

await fs.mkdir(badgesDirURL);

const shieldSubject = 'cssdb';

await Promise.all(features.map(async feature => {
	const shieldStatus = feature.stage === -1 ? 'Rejected' : encodeURIComponent(`Stage ${feature.stage}`);
	const shieldColor = colors[feature.stage] || 'd02c2c';
	const shieldUrl = `https://img.shields.io/badge/${shieldSubject}-${shieldStatus}-${shieldColor}.svg?style=flat-square`;
	const shield = await fetch(shieldUrl).then(response => response.text());

	const badgeURL = new URL(`../public/images/badges/${feature.id}.svg`, import.meta.url);

	return fs.writeFile(badgeURL, shield);
}));

process.exit(0);
