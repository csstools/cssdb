import caniuse from 'caniuse-lite';

export default function supportedBrowsersFromCanIUse(key, feature) {
	const result = {};

	if (typeof caniuse.features[key] === 'undefined') {
		return result;
	}

	const { stats } = caniuse.feature(caniuse.features[key]);

	Object.keys(stats).forEach(browserKey => {
		const [ smallestSupported ] = Object.keys(stats[browserKey])
			.map(version => [version, stats[browserKey][version]])
			.filter(([,support]) => {
				if (feature['allow_partial_implementation']) {
					return support.startsWith('y');
				}

				return support === 'y';
			});

		if (smallestSupported) {
			result[browserKey] = smallestSupported[0].replace(/(\.0)?(-.+)?$/, '');
		}
	});

	return result;
}
