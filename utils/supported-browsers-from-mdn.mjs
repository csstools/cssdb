import mdn from '@mdn/browser-compat-data';
import _get from 'lodash.get';

const MDNToBrowserlist = {
	chrome_android: 'and_chr',
	safari_ios: 'ios_saf',
	firefox_android: 'and_ff',
	opera_android: 'op_mob',
	samsunginternet_android: 'samsung',
	webview_android: 'android',
};

function getBrowsersFromFeature(mdnConfigPath, feature) {
	const mdnFeature = _get(mdn, mdnConfigPath);
	const supportsPrefixes = feature.allow_partial_implementation;
	const result = {};

	if (!mdnFeature) {
		return result;
	}

	const { __compat: { support } } = mdnFeature;

	Object.keys(support).forEach(browserKey => {
		const browserSupport = support[browserKey];
		let version;

		if (Array.isArray(browserSupport)) {
			const versions = browserSupport.sort((a, b) => Number(a?.version_added) - Number(b?.version_added));
			version = versions.find(browserEntry => {
				const hasNoAlternativeName = typeof browserEntry.alternative_name === 'undefined';
				const isPrefixed = typeof browserEntry.prefix !== 'undefined';

				if (!hasNoAlternativeName) {
					return false;
				}

				if (supportsPrefixes && isPrefixed) {
					return true;
				}

				return !isPrefixed;
			})?.version_added;
		} else {
			version = browserSupport.version_added;

			if (!supportsPrefixes && browserSupport.prefix) {
				return;
			}

			if (browserSupport.alternative_name) {
				return;
			}
		}

		if (version) {
			const browser = MDNToBrowserlist[browserKey] || browserKey;
			result[browser] = version;
		}
	});

	return result;
}

export default function supportedBrowsersFromMdn(path, feature) {
	const result = {};

	const paths = Array.isArray(path) ? path : [path];
	const supports = paths.map(mdnPath => getBrowsersFromFeature(mdnPath, feature));

	Object.keys(supports[0]).forEach(browserKey => {
		const isInAllFeatures = supports.every(featureSupport => typeof featureSupport[browserKey] !== 'undefined');

		if (isInAllFeatures) {
			// Sort by descending version and get the first
			const [version] = supports.map(featureSupport => featureSupport[browserKey]).sort((a, b) => {
				return parseFloat(b) - parseFloat(a);
			});
			result[browserKey] = version;
		}
	});

	return result;
}
