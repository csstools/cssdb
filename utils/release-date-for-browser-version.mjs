import bcd from '@mdn/browser-compat-data' assert { type: 'json' };

export function releaseDateForBrowserVersion(browser, version) {
	const dateStr = bcd.browsers?.[browser]?.releases?.[version]?.release_date;
	if (!dateStr) {
		return;
	}

	const firstVersion = Object.keys(bcd.browsers[browser].releases)[0];
	if (version === firstVersion) {
		// If the first version of a browser implements a feature, then the date isn't a significant marker.
		// A new browser can be created with support for all features in 2030, that doesn't indicate that those features are new in 2030.
		return -1;
	}

	return (new Date(dateStr)).getTime() / 1000;
}
