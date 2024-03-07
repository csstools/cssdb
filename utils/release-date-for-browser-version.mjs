import bcd from '@mdn/browser-compat-data' assert { type: 'json' };

export function releaseDateForBrowserVersion(browser, version) {
	const dateStr = bcd.browsers?.[browser]?.releases?.[version]?.release_date;
	if (!dateStr) {
		return;
	}

	// const firstVersion = Object.keys(bcd.browsers[browser].releases)[0];
	// if (version === firstVersion) {
	// 	return 0;
	// }

	return (new Date(dateStr)).getTime() / 1000;
}
