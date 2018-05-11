// internal tooling
const fs   = require('fse');
const path = require('path');

// symbols for passing and failure
const passSymbol = '\x1b[32m✔\x1b[0m';
const failSymbol = '\x1b[31m✖\x1b[0m';

// path to cssdb.json
const cssdbJSON = path.join(__dirname, '../cssdb.json');

// whether to fix the file if possible
const isToBeFixed = process.argv.indexOf('--fix') !== -1;

// test features.json
fs.readJson(cssdbJSON).then(allHaveRequiredData).then(
	length => console.log(`${passSymbol} all ${length} features are valid.`),
	error  => console.log(`${failSymbol} something did not validate.\n  → ${error}`)
);

// test all features for validity
function allHaveRequiredData(features) {
	if (isToBeFixed) {
		fixFeaturesOrdering(features);
	}

	const hasOrderlyFeatures = getFeatureIds(features).join() === getFeatureIds(features).sort().join();

	if (!hasOrderlyFeatures) {
		throw validationError('UNORDERLY FEATURES', 'Received order', JSON.stringify(getFeatureIds(features), null, '    ').slice(1, -2));
	}

	features.forEach(hasRequiredData);

	return fs.writeFile(
		cssdbJSON,
		`${JSON.stringify(features, null, '  ')}\n`
	).then(
		() => features.length
	);
}

// test a feature for validity
function hasRequiredData(feature) {
	const title = Object(feature).title || 'Unknown Feature';
	const keys = Object.keys(Object(feature));
	const ordering = ['id', 'title', 'description', 'specification', 'stage'];
	const polyfillOrdering = ['type', 'link'];

	const hasRequiredFields = keys.slice(0, 5).join() === ordering.join();
	const hasValidStage = feature.stage === -1 || feature.stage === 0 || feature.stage === 1 || feature.stage === 2 || feature.stage === 3 || feature.stage === 4;
	const hasOrderlyAdditionalFields = keys.slice(5).join() === keys.slice(5).sort().join();
	const hasOrderlyPolyfills = !Array.isArray(feature.polyfills) || feature.polyfills.every(
		polyfill => Object.keys(Object(polyfill)).join() === polyfillOrdering.join()
	);

	if (isToBeFixed) {
		if (!hasRequiredFields || !hasOrderlyAdditionalFields) {
			fixFeatureOrdering(feature, ordering);
		}

		if (!hasOrderlyPolyfills) {
			fixFeatureOrdering(feature.polyfills, polyfillOrdering);
		}
	} else if (!hasRequiredFields) {
		throw validationError('MISSING OR UNORDERLY REQUIRED FIELDS', title, keys.slice(0, 5).join(', '));
	} else if (!hasOrderlyAdditionalFields) {
		throw validationError('UNORDERLY ADDITIONAL FIELDS', title, keys.slice(5).join(', '));
	} else if (!hasOrderlyPolyfills) {
		validationError('UNORDERLY POLYFILLS FIELDS', title, polyfillOrdering.join(', '))
	}

	if (!hasValidStage) {
		throw validationError('INVALID STAGE', title, feature.stage);
	}
}

// report a validation error
function validationError(issue, title, notice) {
	return `${issue}: ${title}${notice ? ` (${notice})` : ''}`
}

// get feature ids
function getFeatureIds(features) {
	return features.slice(0).map(feature => feature.id);
}

// fixes all feature ordering
function fixFeaturesOrdering(features) {
	const sorting = ({ id: a }, { id: b }) => a < b ? -1 : a > b ? 1 : 0;

	features.sort(sorting);
}


// fixes a feature ordering
function fixFeatureOrdering(object, order, error) {
	const clone = {};
	const hasEveryKey = order.every(key => key in object);
	const keys = Object.keys(object);
	const additionalKeys = keys.filter(key => order.indexOf(key) === -1).sort();

	if (hasEveryKey) {
		keys.forEach(
			key => {
				clone[key] = object[key];

				delete object[key];
			}
		)

		order.concat(additionalKeys).forEach(
			key => {
				object[key] = clone[key];
			}
		);
	} else {
		throw error;
	}
}
