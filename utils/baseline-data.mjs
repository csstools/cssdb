import { releaseDateForBrowserVersion } from "./release-date-for-browser-version.mjs";

const baselineEngines = {
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
	trident: [
		'ie',
	],
	webkit: [
		'safari',
		'ios_saf'
	]
};

export function baselineData(feature) {
	let supportedEngines = 0;
	let latestReleaseDate;

	for (const engine in baselineEngines) {
		let engineIsSupported = false;
		for (const browser of engines[engine]) {
			const releaseDate = releaseDateForBrowserVersion(browser, feature.browser_support[browser]);
			if (!releaseDate) {
				continue;
			}

			engineIsSupported = true;
			break;
		}

		if (engineIsSupported) {
			supportedEngines++;
		}
	}

	for (const engine in engines) {
		for (const browser of engines[engine]) {
			const releaseDate = releaseDateForBrowserVersion(browser, feature.browser_support[browser]);
			if (!releaseDate) {
				continue;
			}

			if (!latestReleaseDate || releaseDate > latestReleaseDate) {
				latestReleaseDate = releaseDate;
			}
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
