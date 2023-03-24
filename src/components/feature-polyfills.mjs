import { html } from "../util/html.mjs";
import { renderFeaturePolyfill } from "./feature-polyfill.mjs";

export function renderFeaturePolyfills(polyfills, id, title) {
	if (!polyfills || !polyfills.length) {
		return '';
	}

	return html`
		<div class="cssdb-feature-polyfills">
			Use with a
			<ul class="cssdb-feature-polyfill-list">
				${polyfills.map(polyfill => {
					return renderFeaturePolyfill(polyfill, id, title);
				}).join('')}
			</ul>
		</div>
	`;
}
