import { baselineStatus } from '../../utils/baseline-status.mjs';
import { parseExample }  from '../../utils/feature-example.js';
import { backTicksToCodeTags, escapeHTML, html } from '../util/html.mjs';
import { renderCaniuseFeature } from './caniuse-feature.mjs';
import { renderFeaturePolyfills } from './feature-polyfills.mjs';

const stages = [
	'stage-0-aspirational',
	'stage-1-experimental',
	'stage-2-allowable',
	'stage-3-embraced',
	'stage-4-standardized',
];

export function renderFeature(feature) {

	const imageName = `/images/stages/stage-${feature.stage}.svg`;
	const badge = `/images/badges/${feature.id}.svg`;
	const baselineBadge = `/images/badges-baseline/${feature.id}.svg`;

	const cleanTitle = feature.title.replace(/`/g, '');

	return html`
		<article class="cssdb-feature" id="${feature.id}">
			<header class="cssdb-feature-header">
				<a class="cssdb-feature-stage" href="#${stages[feature.stage]}" tabindex="-1" aria-hidden="true">
					<img class="cssdb-feature-stage-image" src="${imageName}" alt="" width="62" height="62" role="presentation" loading="lazy">
				</a>
				<h2 class="cssdb-feature-heading">
					<a href="#${feature.id}">
						${backTicksToCodeTags(escapeHTML(feature.title))}
					</a>
				</h2>
				<p class="cssdb-feature-description">
					${backTicksToCodeTags(escapeHTML(feature.description))}
				</p>
			</header>
			<p class="cssdb-feature-docs">
				<a
					href="https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility"
					aria-label="${baselineStatus(feature)[0]}"
				>
					<img
						src="${baselineBadge}"
						alt=""
						title="${baselineStatus(feature)[0]}"
						loading="lazy"
						decoding="async"
						height="18"
						style="margin: 1px 8px;"
					/>
				</a>
				<a
					href="${feature.specification}"
					aria-label="Specification"
				>
					<img
						src="https://img.shields.io/badge/Spec-005A9C?logo=w3c&style=flat-square"
						alt=""
						loading="lazy"
						decoding="async"
						width="55"
						height="20"
					>
				</a>
				${feature.docs?.mdn ? (
					html`<a
						href="${feature.docs.mdn}"
						aria-label="Documentation"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://shields.io/badge/docs-black?logo=mozilla&style=flat-square"
							alt=""
							loading="lazy"
							decoding="async"
							width="53"
							height="20"
						>
					</a>`
				) : ''}
				<a
					href="#${stages[feature.stage]}"
					aria-label="Stage ${feature.stage}"
				>
					<img
						src="${badge}"
						alt=""
						loading="lazy"
						decoding="async"
						width="94"
						height="20"
					/>
				</a>
			</p>
			<pre class="cssdb-feature-example" dir="ltr">${parseExample(feature.example)}</pre>

			${renderCaniuseFeature(cleanTitle, feature)}
			${renderFeaturePolyfills(feature.polyfills, feature.id, cleanTitle)}
		</article>`;
}
