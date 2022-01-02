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

export default function calculateStage(feature) {
	const defaultStage = feature.stage;

	if (typeof feature.browser_support === 'undefined' || defaultStage === -1) {
		return defaultStage;
	}

	const browserSupport = Object.keys(Engines).reduce((acc, engine) => {
		const isSupportedOnEgine = Engines[engine].some(browser => !!feature.browser_support[browser]);

		if (isSupportedOnEgine) {
			return acc + 1;
		}

		return acc;
	}, 0);

	// Browser support can only bump up to stage 3
	const proposedStage = browserSupport >= 2 ? Math.min(browserSupport, 3) : defaultStage;

	return Math.max(proposedStage, defaultStage);
}
