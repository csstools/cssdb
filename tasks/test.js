// internal tooling
const fs   = require('fse');
const path = require('path');

// symbols for passing and failure
const passSymbol = '\x1b[32m✔\x1b[0m';
const failSymbol = '\x1b[31m✖\x1b[0m';

// path to cssdb.json
const cssdbJSON = path.join(__dirname, '../cssdb.json');

// test features.json
fs.readJson(cssdbJSON).then(allHaveRequiredData).then(
	(length) => console.log(`${passSymbol} all ${length} features are valid.`),
	(error)  => console.log(`${failSymbol} some feature did not validate.\n  → ${error}`)
);

// test all features for validity
function allHaveRequiredData(features) {
	const hasOrderlyFeatures = getFeatureTitles(features).join() === getFeatureTitles(features).sort().join();

	if (!hasOrderlyFeatures) {
		throw ValidationError('UNORDERLY FEATURES', 'Expected order', JSON.stringify(getFeatureTitles(features).sort(), null, '    ').slice(1, -2));
	}

	features.forEach(hasRequiredData);

	return features.length;
}

// test a feature for validity
function hasRequiredData(feature) {
	const title = Object(feature).title || 'Unknown Feature';
	const keys = Object.keys(Object(feature));

	const hasRequiredFields = keys.slice(0, 5).join() === 'title,description,specification,specificationId,stage';
	const hasValidStage = feature.stage === -1 || feature.stage === 0 || feature.stage === 1 || feature.stage === 2 || feature.stage === 3 || feature.stage === 4 || feature.stage === 5;
	const hasOrderlyAdditionalFields = keys.slice(5).join() === keys.slice(5).sort().join();
	const hasOrderlyPolyfills = !Array.isArray(feature.polyfills) || feature.polyfills.every(
		(polyfill) => Object.keys(Object(polyfill)).join() === 'type,link'
	);

	if (!hasRequiredFields) {
		throw ValidationError('MISSING OR UNORDERLY REQUIRED FIELDS', title, keys.slice(0, 5).join(', '));
	}

	if (!hasValidStage) {
		throw ValidationError('INVALID STAGE', title, feature.stage);
	}

	if (!hasOrderlyAdditionalFields) {
		throw ValidationError('UNORDERLY ADDITIONAL FIELDS', title, keys.slice(5).join(', '));
	}

	if (!hasOrderlyPolyfills) {
		throw ValidationError('UNORDERLY POLYFILLS FIELDS', title, 'type, link');
	}
}

// report a validation error
function ValidationError(issue, title, notice) {
	return `${issue}: ${title}${notice ? ` (${notice})` : ''}`
}

// get feature titles
function getFeatureTitles(features) {
	return features.slice(0).map((feature) => feature.title);
}
