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
			return browserVersionHasReleaseDate(browser, support);
		});

		if (isSupportedOnEngine) {
			return acc + 1;
		}

		return acc;
	}, 0);
}
