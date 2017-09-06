// tooling
const fs   = require('fse');
const path = require('path');

// test features.json
fs.readJson('features.json').then(allHaveRequiredData).then(
	(length) => console.log(`\x1b[32m✔\x1b[0m css-db successfully evaluated ${length} features.`),
	(error)  => console.log(`\x1b[31m✖\x1b[0m css-db failed to evaluate a feature.\x1b[0m\n  → ${error}`)
);

function allHaveRequiredData(features) {
	const hasOrderlyFeatures = featureTitles(features).join() === featureTitles(features).sort().join();

	if (!hasOrderlyFeatures) {
		throw ValidationError('UNORDERLY FEATURES', 'Expected order', JSON.stringify(featureTitles(features).sort(), null, '    ').slice(1, -2));
	}

	features.forEach(hasRequiredData);

	return features.length;
}

function hasRequiredData(feature) {
	const title = Object(feature).title || 'Unknown Feature';
	const keys = Object.keys(Object(feature));

	const hasRequiredFields = keys.slice(0, 4).join() === 'title,description,specification,stage';
	const hasValidStage = feature.stage === -1 || feature.stage === 0 || feature.stage === 1 || feature.stage === 2 || feature.stage === 3 || feature.stage === 4 || feature.stage === 5;
	const hasOrderlyAdditionalFields = keys.slice(4).join() === keys.slice(4).sort().join();
	const hasOrderlyPolyfills = !Array.isArray(feature.polyfills) || feature.polyfills.every(
		(polyfill) => Object.keys(Object(polyfill)).join() === 'type,link'
	);

	if (!hasRequiredFields) {
		throw ValidationError('MISSING OR UNORDERLY REQUIRED FIELDS', title, keys.slice(0, 4).join(', '));
	}

	if (!hasValidStage) {
		throw ValidationError('INVALID STAGE', title, feature.stage);
	}

	if (!hasOrderlyAdditionalFields) {
		throw ValidationError('UNORDERLY ADDITIONAL FIELDS', title, keys.slice(4).join(', '));
	}

	if (!hasOrderlyPolyfills) {
		throw ValidationError('UNORDERLY POLYFILLS FIELDS', title, 'type, link');
	}
}

function ValidationError(issue, title, notice) {
	return `${issue}: ${title}${notice ? ` (${notice})` : ''}`
}

function featureTitles(features) {
	return features.slice(0).map((feature) => feature.title);
}
