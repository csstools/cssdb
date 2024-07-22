import bcd from '@mdn/browser-compat-data' assert { type: 'json' };
import semver from 'semver';

export function scanForNextBrowserVersionWithReleaseDate(browser, version, cb) {
	if (!browser || !version) {
		return;
	}

	{
		const result = cb(browser, version);
		if (result) {
			return result;
		}
	}

	const versionNames = Object.keys(bcd.browsers?.[browser]?.releases);
	const thisVersion = semver.coerce(version);
	const thisVersionOrLater = versionNames.find(v => {
		return semver.gte(semver.coerce(v), thisVersion);
	});
	const thisVersionIndex = versionNames.indexOf(thisVersionOrLater);
	if (thisVersionIndex === -1) {
		return;
	}

	for (let i = 1; i < 10; i++) {
		const result = cb(browser, version);
		if (result) {
			return result;
		}

		version = versionNames[thisVersionIndex + i];
	}
}
