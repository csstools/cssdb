// tooling
const fs    = require('fse');
const path  = require('path');

// features directory
const dir = 'css-features';

fs.readdir(dir).then(
	(basenames) => Promise.all(
		basenames.filter(
			(basename) => basename.slice(-5) === '.json'
		).map(
			(basename) => path.resolve(dir, basename)
		).map(
			(filepath) => fs.readFile(filepath, 'utf8').then(
				(content) => JSON.parse(content)
			).then(hasRequiredData).then(
				(result) => result === true ? Promise.resolve(result) : Promise.reject(`${ result } in ${ path.basename(filepath) }`)
			)
		)
	)
).then(
	(array) => console.log(`\x1b[32m✔\x1b[0m css-db successfully evaluated ${ array.length } features.`),
	(error) => console.log(`\x1b[31m✖\x1b[0m css-db failed to evaluate a feature.\x1b[0m\n  → ${ error }`)
);

function hasRequiredData(data) {
	const hasRequiredFields = Object.keys(data).slice(0, 5).join() === 'title,description,specification,stage,citations';

	const hasValidStage = data.stage === null || data.stage === 0 || data.stage === 1 || data.stage === 2 || data.stage === 3 || data.stage === 4;

	const hasRequiredCitations = data.citations.length > data.stage;

	const hasOrderlyAdditionalFields = /^(|issues|issues,polyfill|polyfill)$/.test(
		Object.keys(data).filter(
			(field) => /^(issues|polyfill)$/.test(field)
		).join()
	);

	return hasRequiredFields
	? hasValidStage
		? hasRequiredCitations
			? hasOrderlyAdditionalFields
				? true
				: 'Unorderly additional fields'
			: 'Not enough citations'
		: 'Not a valid stage'
	: 'Not all required fields or unordered fields';
}
