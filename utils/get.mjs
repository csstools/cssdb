export function get(object, keys) {
	let _keys;
	if (typeof keys === 'string') {
		_keys = keys.split('.')
	} else {
		_keys = keys.slice();
	}

	const key = _keys.shift();
	if (!key) {
		return null;
	}

	if (key === 'prototype' || key === '__proto__') {
		return null;
	}

	let hasOwnProperty = false;
	try {
		hasOwnProperty = Object.prototype.hasOwnProperty.call(object, key)
	} catch {
		return null;
	}

	if (hasOwnProperty) {
		const value = object[key];

		if (_keys.length === 0) {
			return value;
		} else {
			return get(value, _keys);
		}
	}

	return null;
}
