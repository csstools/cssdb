import caniuse from 'caniuse-lite';
import semver from 'semver';

export function releaseDateForBrowserVersion(browser, version) {
	const caniuseVersion = findCaniuseVersion(browser, version);
	if (!caniuseVersion) {
		return false;
	}

	return caniuse.agents[browser].release_date[caniuseVersion];
}

export function findCaniuseVersion(browser, version) {
	if (!caniuse.agents[browser]) {
		// Unknown browser name
		return;
	}

	const semverVersion = semver.coerce(version);
	if (!semverVersion) {
		return;
	}

	return caniuse.agents[browser].versions.find((x) => {
		if (!x) {
			// x can be null
			return false;
		}

		if (x.includes('-')) {
			// version "15.2" ==  caniuse "15.2-15.3"
			return semver.satisfies(semverVersion, x);
		}

		const xx = semver.coerce(x);
		if (!xx) {
			return false;
		}

		// Caniuse doesn't have very old versions.
		// Substitute the oldest version for the version we're looking for.
		// chrome 1 -> chrome 4
		if (semver.lt(semverVersion, xx)) {
			return true;
		}

		return semver.eq(semverVersion, xx);
	});
}
