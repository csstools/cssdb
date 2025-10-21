import bcd from '@mdn/browser-compat-data' with { type: 'json' };
import semver from 'semver';
import { get } from './get.mjs';
import { MDNToBrowserlist } from './mdn-to-browserslist.mjs';

function getBrowsersFromFeature(mdnConfigPath, feature) {
	const mdnFeature = get(bcd, mdnConfigPath);
	if (!mdnFeature) {
		throw new Error(`Invalid mdn config path "${mdnConfigPath}" in feature "${feature.id}"`);
	}

	// We assume users also have autoprefixer.
	// If autoprefixer adds prefixes for this feature we count it as supported.
	const supportsPrefixes = Object(feature.mdn_count_prefixed_as_supported)[mdnConfigPath];
	const result = {};

	const { __compat: { support } } = mdnFeature;

	Object.keys(support).forEach(browserKey => {
		const browserSupport = support[browserKey];
		let version;

		if (Array.isArray(browserSupport)) {
			const versions = browserSupport.sort((a, b) => {
				const aa = semver.coerce(a.version_added);
				const bb = semver.coerce(b.version_added);
				if (!aa || !bb) {
					return 0;
				}

				return semver.compare(aa, bb);
			});

			version = versions.find(browserEntry => {
				const hasAlternativeName = typeof browserEntry.alternative_name !== 'undefined';
				const isPrefixed = typeof browserEntry.prefix !== 'undefined';
				const isAllowedPrefix = isPrefixed && browserEntry.prefix !== '-khtml-' && !browserEntry.partial_implementation;
				const hasFlags = Array.isArray(browserEntry.flags);

				if (hasAlternativeName || hasFlags) {
					return false;
				}

				if (browserEntry.partial_implementation) {
					return false;
				}

				if (supportsPrefixes && isAllowedPrefix) {
					return true;
				}

				return !isPrefixed;
			})?.version_added;
		} else {
			const hasFlags = Array.isArray(browserSupport.flags);
			version = browserSupport.version_added;

			if (hasFlags) {
				return;
			}

			if (browserSupport.partial_implementation) {
				return false;
			}

			const isPrefixed = typeof browserSupport.prefix !== 'undefined';
			const isAllowedPrefix = isPrefixed && browserSupport.prefix !== '-khtml-' && !browserSupport.partial_implementation;
			if (isPrefixed && !(supportsPrefixes && isAllowedPrefix)) {
				return;
			}

			if (browserSupport.alternative_name) {
				return;
			}
		}

		if (version) {
			// see : https://github.com/mdn/browser-compat-data/issues/17336
			//   Ranged values means that a feature may have been added in a version earlier than "37",
			//   but we don't know exactly when.
			if (version.startsWith('≤')) {
				version = version.substring(1);
			}

			const browser = MDNToBrowserlist(browserKey);
			result[browser] = version;
		}
	});

	return result;
}

export default function supportedBrowsersFromMdn(path, feature) {
	const result = {};

	const paths = Array.isArray(path) ? path : [path];
	if (!paths.length) {
		return result;
	}

	const supports = paths.map(mdnPath => getBrowsersFromFeature(mdnPath, feature));

	Object.keys(supports[0]).forEach(browserKey => {
		const isInAllFeatures = supports.every(featureSupport => typeof featureSupport[browserKey] !== 'undefined');

		if (isInAllFeatures) {
			// Sort by descending version and get the first
			const [version] = supports.map(featureSupport => featureSupport[browserKey]).filter((x) => {
				return !!semver.coerce(x);
			}).sort((a, b) => {
				const aa = semver.coerce(a);
				const bb = semver.coerce(b);
				if (!aa || !bb) {
					return 0;
				}

				return semver.compare(bb, aa); // reverse sort
			});
			result[browserKey] = version;
		}
	});

	return result;
}
