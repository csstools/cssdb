import { escapeHTML, html } from "../util/html.mjs";

const browsers = {
	'ios_saf': 'iOS Safari',
	'op_mob': 'Opera Mobile',
	'and_uc': 'UC Mobile for Android',
	'and_chr': 'Chrome for Android',
	'and_ff': 'Firefox for Android',
	'and_qq': 'QQ Browser',
	'webview_ios': 'WKWebview on iOS',
	'webview_android': 'Android WebView'
};

// Similar order as MDN
const browser_order = [
	// Desktop
	"chrome",
	"edge",
	"firefox",
	"ie",
	"opera",
	"safari",
	// Mobile
	"and_chr",
	"and_ff",
	"op_mob",
	"ios_saf",
	"samsung",
	"android",
	// Headset
	"oculus",
	// Webviews
	'webview_android',
	'webview_ios',
];

export function renderFeatureSupportStats(title, feature) {
	let link = '';
	if (feature.docs && feature.docs.mdn) {
		link = `${feature.docs.mdn}#browser_compatibility`;
	}

	const feature_browsers = Object.keys(feature.browser_support);
	feature_browsers.sort((a, b) => {
		const a_index = browser_order.indexOf(a);
		const b_index = browser_order.indexOf(b);
		if (a_index === -1) {
			return 1;
		}
		if (b_index === -1) {
			return -1;
		}
		return a_index - b_index;
	});

	return html`
		<a
			class="cssdb-feature-support-stats"
			${(link && feature.browser_support && feature_browsers.length > 0) ? `href="${link}"` : ''}
			target="_blank"
			rel="noreferrer"
			aria-label="Browser support. Opens in a new tab."
		>
			${(feature_browsers.map((id) => {
				return html`<span class="cssdb-browser cssdb-browser--${id}">
					<span class="sr-only">Supported on ${browsers[id] || id} since version </span>
					<span class="cssdb-browser-version">${escapeHTML(feature.browser_support[id])}</span>
				</span>`;
			}).join(''))}
		</a>`;
}
