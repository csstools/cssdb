export default function applyBrowserOverrides(feature, realValues, overrides) {
	for (const key in overrides) {
		const from = overrides[key].from;
		const to = overrides[key].to;

		if (typeof realValues[key] === 'undefined' && from === null) {
			// We can not define "undefined" in JSON, because that is not how JSON works.
			realValues[key] = to;
			continue;
		}

		if (realValues[key] !== from) {
			// We only want to keep overrides in "cssdb.settings.json" for up until upstream issues or questions in MDN browser compat data have been resolved.
			// If the MDN data changes we want to throw an error so that we know to update "cssdb.settings.json".
			throw new Error(errorMessage(feature, key, from, realValues[key]));
		}

		realValues[key] = to;

		if (to === null) {
			delete realValues[key];
		}
	}

	return realValues;
}

function errorMessage(feature, browser, from, realValue) {
	return `The overrides for ${browser} in ${feature} might no longer be needed. MDN used to have ${from} and now has ${realValue}.`;
}
