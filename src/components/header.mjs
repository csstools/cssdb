import { html } from "../util/html.mjs";

export function renderHeader() {
	return html`
		<header class="cssdb-header">
			<img class="cssdb-header-branding" src="/images/cssdb.svg" alt="cssdb logo" width="90" height="90" role="presentation">
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
