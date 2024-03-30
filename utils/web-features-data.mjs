import webFeatures from 'web-features';

export function applyWebFeaturesData(feature) {
	const webFeatureName = feature['web-feature'];
	if (!webFeatureName) {
		return;
	}

	const webFeature = webFeatures[webFeatureName];
	if (!webFeature) {
		throw new Error(`Unknown web feature: ${webFeatureName}`);
	}

	if (!feature.mdn_path && webFeature.compat_features) {
		feature.mdn_path = webFeature.compat_features;
	}

	if (!feature.title && webFeature.name) {
		feature.title = webFeature.name;
	}

	if (!feature.specification && webFeature.spec) {
		feature.specification = webFeature.spec;
	}
}
