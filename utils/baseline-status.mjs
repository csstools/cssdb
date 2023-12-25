export function baselineStatus(feature) {
	if (!feature.vendors_implementations) {
		return 'Experimental';
	}

	if (!feature.interoperable_at) {
		return 'Limited availability';
	}

	const interoperableAtDate = new Date(feature.interoperable_at * 1000);
	const thirty_months_ago = new Date();
	thirty_months_ago.setMonth(thirty_months_ago.getMonth() - 30);
	if (feature.interoperable_at > (thirty_months_ago.getTime() / 1000)) {
		return `Newly available (${interoperableAtDate.getFullYear()})`;
	}

	return `Widely available (${interoperableAtDate.getFullYear()})`;
}

export function baselineIcon(status) {
	if (status === 'Experimental') {
		return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 111 62"><title>${status}</title><path d="m30.833 0 18.5 18.6-6.166 6.2-18.5-18.6L30.833 0Z" fill="#d30038"/><path d="M86.333 6.2 111 31 86.333 55.8l-6.166-6.2 18.5-18.6-18.5-18.6 6.166-6.2Z" fill="#f8b7c8"/><path d="m67.833 37.2-6.166 6.2 18.5 18.6 6.166-6.2-18.5-18.6Z" fill="#d30038"/><path d="m24.667 6.2 6.166 6.2-18.5 18.6 18.5 18.6-6.166 6.2L0 31 24.667 6.2Z" fill="#f8b7c8"/><path d="m80.167 0 6.166 6.2-55.5 55.8-6.166-6.2L80.167 0Z" fill="#d30038"/></svg>`;
	}

	if (status === 'Limited availability') {
		return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 111 62"><title>${status}</title><path d="m30.833 0 18.5 18.6-6.166 6.2-18.5-18.6L30.833 0Z" fill="#D78000"/><path d="M86.333 6.2 111 31 86.333 55.8l-6.166-6.2 18.5-18.6-18.5-18.6 6.166-6.2Z" fill="#E5D0AC"/><path d="m67.833 37.2-6.166 6.2 18.5 18.6 6.166-6.2-18.5-18.6Z" fill="#D78000"/><path d="m24.667 6.2 6.166 6.2-18.5 18.6 18.5 18.6-6.166 6.2L0 31 24.667 6.2Z" fill="#E5D0AC"/><path d="m80.167 0 6.166 6.2-55.5 55.8-6.166-6.2L80.167 0Z" fill="#D78000"/></svg>`;
	}

	if (status.startsWith('Newly available')) {
		return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 111 61"><title>${status}title><path d="M30.833 0 37 6.1l-6.167 6.1-6.166-6.1L30.833 0Zm12.334 12.2 6.166 6.1-6.166 6.1L37 18.3l6.167-6.1Zm49.333 0 6.167 6.1-6.167 6.1-6.167-6.1 6.167-6.1Zm12.333 12.2L111 30.5l-6.167 6.1-6.166-6.1 6.166-6.1ZM92.5 36.6l6.167 6.1-6.167 6.1-6.167-6.1 6.167-6.1ZM80.167 48.8l6.166 6.1-6.166 6.1L74 54.9l6.167-6.1ZM67.833 36.6 74 42.7l-6.167 6.1-6.166-6.1 6.166-6.1ZM18.5 12.2l6.167 6.1-6.167 6.1-6.167-6.1 6.167-6.1Z" fill="#A9C1EA"/><path d="m80.167 0 6.166 6.1-55.5 54.9L0 30.5l6.167-6.1 24.666 24.4L80.167 0Z" fill="#1671F1"/></svg>`;
	}

	return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 111 62"><title>${status}</title><path d="m86.333 6.2-6.166 6.2 18.5 18.6-18.5 18.6-12.334-12.4-6.166 6.2 18.5 18.6L111 31 86.333 6.2ZM30.833 0 6.167 24.8l6.166 6.2 18.5-18.6 12.334 12.4 6.166-6.2L30.833 0Z" fill="#B9D8BF"/><path d="m80.167 0 6.166 6.2-55.5 55.8L0 31l6.167-6.2 24.666 24.8L80.167 0Z" fill="#148936"/></svg>`;
}
