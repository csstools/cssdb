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
			})
			.sort(([versionA], [versionB]) => parseFloat(versionA.split('-')[0]) -  parseFloat(versionB.split('-')[0]));

		if (smallestSupported) {
			result[browserKey] = smallestSupported[0].replace(/(\.0)?(-.+)?$/, '');
		}
	});

	/*
	* CanIUse doesn't keep track of Android version history so only the last version
	* is currently tracked, see https://github.com/Fyrd/caniuse/issues/3518
	*
	* caniuse.agents holds an object with versions as keys and dates as the value
	* */
	const [latestAndroidChrome] = Object.keys(caniuse.agents.and_chr.release_date);

	if (typeof result.and_chr !== 'undefined' && result.and_chr === latestAndroidChrome) {
		result.and_chr = result.chrome;
	}

	if (typeof result.android !== 'undefined' && result.android === latestAndroidChrome) {
		result.android = result.chrome;
	}

	return result;
}
