export const MDNToBrowserlistMap = {
	chrome_android: 'and_chr',
	safari_ios: 'ios_saf',
	firefox_android: 'and_ff',
	opera_android: 'op_mob',
	samsunginternet_android: 'samsung',
	webview_android: 'android',
};

export function MDNToBrowserlist(browser) {
	return MDNToBrowserlistMap[browser] || browser;
}

export const BrowserslistToMDNMap = {
	and_chr: 'chrome_android',
	ios_saf: 'safari_ios',
	and_ff: 'firefox_android',
	op_mob: 'opera_android',
	samsung: 'samsunginternet_android',
	android: 'webview_android',
};

export function BrowserslistToMDN(browser) {
	return BrowserslistToMDNMap[browser] || browser;
}
