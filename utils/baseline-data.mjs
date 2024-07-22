import { BrowserslistToMDN } from "./mdn-to-browserslist.mjs";
import { releaseDateForBrowserVersion } from "./release-date-for-browser-version.mjs";
import { scanForNextBrowserVersionWithReleaseDate } from "./scan-for-next-browser-version.mjs";

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
		let supportedBrowsers = 0;
		const browsersInEngine = engines[engine];
		for (const browser of browsersInEngine) {
			const releaseDate = scanForNextBrowserVersionWithReleaseDate(BrowserslistToMDN(browser), feature.browser_support[browser], releaseDateForBrowserVersion);
			if (!releaseDate) {
				continue;
			}

			supportedBrowsers++;
		}

		if (supportedBrowsers === browsersInEngine.length) {
			supportedEngines++;
		}
	}

	for (const engine in engines) {
		for (const browser of engines[engine]) {
			const releaseDate = scanForNextBrowserVersionWithReleaseDate(BrowserslistToMDN(browser), feature.browser_support[browser], releaseDateForBrowserVersion);
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
