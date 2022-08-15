import caniuse from 'caniuse-lite';
import semver from 'semver';

export default function browserVersionHasReleaseDate(browser, version) {
	if (!caniuse.agents[browser]) {
		// Unknown browser name
		return false;
	}

	const semverVersion = semver.coerce(version);
	if (!semverVersion) {
		return false;
	}

	const caniuseVersion = caniuse.agents[browser].versions.find((x) => {
		if (!x) {
			// x can be null
			return false;
		}

		if (x.includes('-')) {
			// version "15.2" ==  caniuse "15.2-15.3"
			return x.split('-').includes(version);
		}

		// Caniuse doesn't have very old versions.
		// Substitute the oldest version for the version we're looking for.
		// chrome 1 -> chrome 4
		const xx = semver.coerce(x);
		if (!xx) {
			return false;
		}
		if (semver.lt(semverVersion, xx)) {
			return true;
		}

		return x === version;
	});

	if (!caniuse.agents[browser].release_date[caniuseVersion]) {
		return false;
	}

	return true;
}
