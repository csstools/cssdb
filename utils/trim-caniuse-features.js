import caniuse from 'caniuse-lite';

export function trimCaniuseFeatures(feature) {
	if (feature.caniuse_compat) {
		return {
			stats: feature.caniuse_compat
		};
	}

	if (!feature.caniuse || !feature.caniuse in caniuse.features) {
		return false;
	}

	const canIUseFeature = caniuse.feature(caniuse.features[feature.caniuse]);
	const stats = Object(canIUseFeature.stats);

	canIUseFeature.stats = Object.keys(stats).reduce(
		(reducedStats, id) => {
			const versions = Object(stats[id]);

			const reducedVersions = Object.keys(versions).reduce(
				(reducedVersions, version) => {
					const hasSupport = versions[version].indexOf('y') === 0;

					if (hasSupport) {
						reducedVersions = reducedVersions || {};
						reducedVersions[version] = versions[version];
					}

					return reducedVersions;
				},
				null
			);

			if (reducedVersions) {
				reducedStats = reducedStats || {};

				reducedStats[id] = reducedVersions;
			}

			return reducedStats;
		},
		null
	);

	return canIUseFeature;
}
