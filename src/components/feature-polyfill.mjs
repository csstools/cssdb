import { escapeHTML, html } from "../util/html.mjs";

const presetEnvPlugins = [
	'all-property',
	'any-link-pseudo-class',
	'blank-pseudo-class',
	'break-properties',
	'cascade-layers',
	'case-insensitive-attributes',
	'clamp',
	'color-function',
	'color-functional-notation',
	'color-mix',
	'custom-media-queries',
	'custom-properties',
	'custom-selectors',
	'dir-pseudo-class',
	'display-two-values',
	'double-position-gradients',
	'exponential-functions',
	'float-clear-logical-values',
	'focus-visible-pseudo-class',
	'focus-within-pseudo-class',
	'font-format-keywords',
	'font-variant-property',
	'gamut-mapping',
	'gap-properties',
	'gradients-interpolation-method',
	'has-pseudo-class',
	'hexadecimal-alpha-notation',
	'hwb-function',
	'ic-unit',
	'image-set-function',
	'is-pseudo-class',
	'lab-function',
	'logical-properties-and-values',
	'logical-resize',
	'logical-viewport-units',
	'media-queries-aspect-ratio-number-values',
	'media-query-ranges',
	'nested-calc',
	'nesting-rules',
	'not-pseudo-class',
	'oklab-function',
	'opacity-percentage',
	'overflow-property',
	'overflow-wrap-property',
	'place-properties',
	'prefers-color-scheme-query',
	'rebeccapurple-color',
	'relative-color-syntax',
	'scope-pseudo-class',
	'stepped-value-functions',
	'system-ui-font-family',
	'text-decoration-shorthand',
	'trigonometric-functions',
	'unset-value',
];

export function renderFeaturePolyfill(polyfill, id, title) {
	const repoUrl = polyfill.link.includes('csstools/postcss-plugins') ? 'https://github.com/csstools/postcss-plugins' : polyfill.link;
	const starImage = `https://img.shields.io/github/stars/${polyfill.link.split('/').slice(3, 5).join('/')}.svg?style=social`;
	const isGithub = repoUrl.includes('github.com');
	const isBundled = presetEnvPlugins.includes(id);

	return html`
		<li class="cssdb-feature-polyfill-item">
			<a class="cssdb-feature-polyfill-link" href="${polyfill.link}">
				${polyfill.type}
				<span class="sr-only">for ${escapeHTML(title)}</span>
			</a>

			${isGithub ? (html`
				<span class="cssdb-feature-polyfill-stars-minimal">
					<a href="${repoUrl}/stargazers">
						<img
							alt="GitHub stars"
							src="${starImage}"
							loading="lazy"
						>
					</a>
				</span>`
			) : ''}

			${(polyfill.type === "PostCSS Plugin" && isBundled) ? (
				html`
					<span> (bundled with <a class="cssdb-feature-polyfill-link" href="https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env#readme">Preset Env</a>)</span>
				`
			) : ''}
		</li>`;
}
