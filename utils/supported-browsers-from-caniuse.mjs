import caniuse from 'caniuse-lite';

export default function supportedBrowsersFromCanIUse(key) {
	const result = {};

	if (typeof caniuse.features[key] === 'undefined') {
		return result;
	}

	const { stats } = caniuse.feature(caniuse.features[key]);

	Object.keys(stats).forEach(browserKey => {
		const [ smalledSupported ] = Object.keys(stats[browserKey])
			.map(version => [version, stats[browserKey][version]])
			.filter(([,support]) => support.startsWith('y'));

		if (smalledSupported) {
			result[browserKey] = smalledSupported[0].replace(/(\.0)?(-.+)?$/, '');
		}
	});

	return result;
}
