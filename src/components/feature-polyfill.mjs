import { html } from "../util/html.mjs";

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
	'custom-media-queries',
	'custom-properties',
	'custom-selectors',
	'dir-pseudo-class',
	'display-two-values',
	'double-position-gradients',
	'environment-variables',
	'focus-visible-pseudo-class',
	'focus-within-pseudo-class',
	'font-format-keywords',
	'font-variant-property',
	'gap-properties',
	'has-pseudo-class',
	'hexadecimal-alpha-notation',
	'hwb-function',
	'ic-unit',
	'is-pseudo-class',
	'image-set-function',
	'lab-function',
	'logical-properties-and-values',
	'media-query-ranges',
	'nesting-rules',
	'not-pseudo-class',
	'oklab-function',
	'opacity-percentage',
	'overflow-property',
	'overflow-wrap-property',
	'place-properties',
	'prefers-color-scheme-query',
	'rebeccapurple-color',
	'stepped-value-functions',
	'system-ui-font-family',
	'trigonometric-functions',
	'unset-value'
];

export function featurePolyfill(polyfill, id, title) {
	const repoUrl = polyfill.link.includes('csstools/postcss-plugins') ? 'https://github.com/csstools/postcss-plugins' : polyfill.link;
	const starImage = `https://img.shields.io/github/stars/${polyfill.link.split('/').slice(3, 5).join('/')}.svg?style=social`;
	const isGithub = repoUrl.includes('github.com');
	const isBundled = presetEnvPlugins.includes(id);

	return html`
		<li class="cssdb-feature-polyfill-item">
			<a class="cssdb-feature-polyfill-link" href="${polyfill.link}">
				${polyfill.type}
				<span class="sr-only">for ${title}</span>
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
		${(polyfill.type === "PostCSS Plugin" && isBundled) && (
			html`
				<span> (bundled with <a class="cssdb-feature-polyfill-link" href="https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env">Preset Env</a>)</span>
			`
		)}
	</li>`;
}
