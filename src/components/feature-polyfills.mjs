import { featurePolyfill } from "./feature-polyfill.mjs";

export function featurePolyfills(polyfills, id, title) {
	if (!polyfills || !polyfills.length) {
		return '';
	}

	return html`
		<div class="cssdb-feature-polyfills">
			Use with a
			<ul class="cssdb-feature-polyfill-list">
				${polyfills.map(polyfill => {
					return featurePolyfill(polyfill, id, title);
				})}
			</ul>
		</div>
	`;
}
