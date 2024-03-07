import { releaseDateForBrowserVersion } from "./release-date-for-browser-version.mjs";

const engines = {
	blink: [
		'and_chr',
		'chrome',
		'edge',
	],
	gecko: [
		'firefox',
		'and_ff',
	],
	webkit: [
		'safari',
		'ios_saf'
	]
};

const mobile_browsers = [
	'and_chr',
	'and_ff',
	'ios_saf'
];

export function baselineData(feature) {
	let supportedEngines = 0;
	let latestReleaseDate;


	for (const engine in engines) {
		let engineIsSupported = false;
		for (const browser of engines[engine]) {
			const releaseDate = releaseDateForBrowserVersion(browser, feature.browser_support[browser]);
			if (!releaseDate) {
				continue;
			}

			engineIsSupported = true;
			if (!latestReleaseDate || releaseDate > latestReleaseDate) {
				latestReleaseDate = releaseDate;
			}
		}

		if (engineIsSupported) {
			supportedEngines++;
		}
	}

	if (supportedEngines < 3) {
		latestReleaseDate = undefined;
	}

	return [
		supportedEngines,
		latestReleaseDate
	];
}
