import { html } from "../util/html.mjs";

export function footer() {
	return html`
		<footer>
			<p>Want to contribute? Checkout the <a href="https://github.com/csstools/cssdb">cssdb on GitHub</a>.</p>
			<p>Logos (except for Internet Explorer, BlackBerry, Baidu and QQ) are from <a href="https://github.com/alrra/browser-logos">alrra/browser-logos</a>. Check them out!</p>

			<p class="cssdb-deploys">
				<a href="https://www.netlify.com" target="_blank" rel="noreferrer" class="cssdb-deploys__logo">
					<img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" loading="lazy" decoding="async" width="114" height="51" />
				</a>
			</p>
		</footer>
	`;
}
