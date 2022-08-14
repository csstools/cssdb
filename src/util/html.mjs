// Enable "html``" tagged template literals with html syntax highlighting.
export function html(strings, ...values) {
	return String.raw({ raw: strings }, ...values);
}

const htmlEntities = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	"'": '&#39;',
	'"': '&quot;'
};

export function escapeHTML(string) {
	return string.replace(/[&<>'"]/g, (tag) => {
		return htmlEntities[tag];
	});
}
