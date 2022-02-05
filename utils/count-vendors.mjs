import browserVersionHasReleaseDate from "./browser-version-has-release-date.mjs";

const Engines = {
	Blink: [
		'chrome',
		'and_chr',
	],
	Gecko: [
		'firefox',
		'and_ff',
	],
	Webkit: [
		'safari',
		'ios_saf'
	]
};

export default function countVendors(feature) {
	return Object.keys(Engines).reduce((acc, engine) => {
		const isSupportedOnEngine = Engines[engine].some(browser => {
			const support = feature.browser_support[browser];
			if (!browserVersionHasReleaseDate(browser, support)) {
				return false;
			}

			// Do not allow pre-releases to count as a vendor implementation
			return typeof support === 'string' && /^[0-9|.]+$/.test(support);
		});

		if (isSupportedOnEngine) {
			return acc + 1;
		}

		return acc;
	}, 0);
}
