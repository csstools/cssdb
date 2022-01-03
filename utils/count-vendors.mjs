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
		const isSupportedOnEgine = Engines[engine].some(browser => !!feature.browser_support[browser]);

		if (isSupportedOnEgine) {
			return acc + 1;
		}

		return acc;
	}, 0);
}
