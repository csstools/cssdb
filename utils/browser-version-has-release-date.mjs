import caniuse from 'caniuse-lite';

export default function browserVersionHasReleaseDate(browser, version) {
	if (!caniuse.agents[browser]) {
		// Unknown browser name
		return false;
	}

	if (!(/^[0-9|.]+$/.test(version))) {
		// Safari TP
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
		if (majorVersionAsInt(version) < majorVersionAsInt(x)) {
			return true;
		}

		return x === version;
	});

	if (!caniuse.agents[browser].release_date[caniuseVersion]) {
		return false;
	}

	return true;
}

function majorVersionAsInt(version) {
	return parseInt(version.split('.')[0], 10);
}
