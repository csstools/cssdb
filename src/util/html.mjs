export function html(strings, ...keys) {
	return strings.flatMap((s, index) => {
		return [s, keys[index] || ''];
	}).join('');
}
