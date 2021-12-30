const path = require('path');
const fs = require('fs/promises');
const fetch = require('node-fetch');

(async () => {
	const features = await fs.readFile('cssdb.json', 'utf8').then(JSON.parse);
	const colors = [
		'414141',
		'ed782a',
		'899c1f',
		'3e7817',
		'005a9c'
	];

	const shieldSubject = 'cssdb';
	const badgesPath = path.join(__dirname, '../public/images/badges');

	try {
		await fs.rm(badgesPath, { recursive: true });
	} catch (e) {
		// Error silently
	}

	await fs.mkdir(badgesPath);

	await Promise.all(features.map(async feature => {
		const shieldStatus = feature.stage === -1 ? 'Rejected' : encodeURIComponent(`Stage ${feature.stage}`);
		const shieldColor = colors[feature.stage] || 'd02c2c';
		const shieldUrl = `https://img.shields.io/badge/${shieldSubject}-${shieldStatus}-${shieldColor}.svg?style=flat-square`;
		const shield = await fetch(shieldUrl).then(response => response.text());

		return fs.writeFile(path.join(__dirname, `../public/images/badges/${feature.id}.svg`), shield);
	}));
})();
