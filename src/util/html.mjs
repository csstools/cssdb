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

export function backTicksToCodeTags(string) {
	let result = '';
	let inBackticks = false;

	for (let i = 0; i < string.length; i++) {
		if (string[i] === '`') {
			if (inBackticks) {
				result += '</code>';
				inBackticks = false;
			} else {
				result += '<code>';
				inBackticks = true;
			}

			continue;
		}

		result += string[i];
	}

	return result;
}
