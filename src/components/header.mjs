import { html } from "../util/html.mjs";

export function renderHeader() {
	return html`
		<header class="cssdb-header">
			<picture>
				<source
					srcset="/images/css-tools-dark.svg"
					media="(prefers-color-scheme: dark)"
				/>
				<img class="cssdb-header-branding" src="/images/css-tools.svg" alt="CSS Tools" width="220" height="100" role="presentation">
			</picture>
			<div class="cssdb-header-heading">
				<h1 class="cssdb-header-title">
					What’s next for CSS?
				</h1>
				<p class="cssdb-header-description">
					<strong>cssdb</strong> is a comprehensive list of CSS features and their positions in the process of becoming implemented web standards.
				</p>
			</div>
			<a class="cssdb-header-link" href="#the-staging-process">What are the stages?</a>
		</header>
	`;
}
