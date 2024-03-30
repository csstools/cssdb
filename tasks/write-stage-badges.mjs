import fs from 'fs/promises';
import cssdb from 'cssdb';
const badgesDirURL = new URL('../public/images/badges/', import.meta.url);
const badgesDirURLOld = new URL('../public/badge/', import.meta.url);

const colors = [
	'414141',
	'ed782a',
	'899c1f',
	'3e7817',
	'005a9c'
];

function renderBadgeSVG(label, status, color) {
	// result from : `https://img.shields.io/badge/${encodeURICompoment(shieldSubject)}-${encodeURICompoment(shieldStatus)}-${encodeURICompoment(shieldColor)}.svg?style=flat-square`;
	return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="94" height="20" role="img" aria-label="${label}: ${status}"><title>${label}: ${status}</title><g shape-rendering="crispEdges"><rect width="41" height="20" fill="#555"/><rect x="41" width="53" height="20" fill="#${color}"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text x="215" y="140" transform="scale(.1)" fill="#fff" textLength="310">${label}</text><text x="665" y="140" transform="scale(.1)" fill="#fff" textLength="430">${status}</text></g></svg>`
}

await fs.rm(badgesDirURL, { force: true, recursive: true });
await fs.mkdir(badgesDirURL);

await fs.rm(badgesDirURLOld, { force: true, recursive: true });
await fs.mkdir(badgesDirURLOld);

await Promise.all(cssdb.map((feature) => {
	const shieldStatus = feature.stage === -1 ? 'Rejected' : `Stage ${feature.stage}`;
	const shieldColor = colors[feature.stage] || 'd02c2c';
	const shield = renderBadgeSVG('cssdb', shieldStatus, shieldColor)

	const badgeURL = new URL(`../public/images/badges/${feature.id}.svg`, import.meta.url);
	const badgeURLOld = new URL(`../public/badge/${feature.id}.svg`, import.meta.url);

	return Promise.all([
		fs.writeFile(badgeURL, shield),
		fs.writeFile(badgeURLOld, shield)
	]);
}));
