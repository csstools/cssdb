import { html } from "../util/html.mjs";

export function renderStages() {
	// TODO : this is copy/paste from the previous Astro output.
	// Astro had a way to convert markdown to html.
	// The original content can be found in "STAGES.md" in the root of the repo.
	return html`
		<aside class="cssdb-process">
			<h2 id="the-staging-process">The Staging Process</h2>
			<p>Staging processes allow developers to accomplish real things and get involved
				in the creation of standards, testing, feedback, and new use cases.</p>
			<p>This staging process reflects the real-life stability of new CSS features.</p>
			<p>You can read an <a href="https://fantasai.inkedblade.net/weblog/2011/inside-csswg/process">inside view of the
					CSSWG</a> to learn about the official
				(and unofficial) development stages of CSS specifications. In reality,
				specifications and browser implementations happen out of sync. For example,
				there have been stable CSS features missing in all browsers, while other CSS
				features developed outside the <a href="https://www.w3.org/">W3C</a> have appeared in browsers. This is too
				ambiguous for the web development community, and a more accountable process
				is desired.</p>
			<h3 id="stage-0-aspirational">Stage 0: Aspirational</h3>
			<img src="/images/stages/stage-0.svg" alt="" align="left" width="90" height="90">
			<blockquote>
				<p>“This is a silly idea.”</p>
			</blockquote>
			<p>An <strong>Unofficial Draft</strong> or <strong>Editor’s Draft</strong> <a
					href="#what-is-a-champion">championed</a> by a
				<a href="https://wiki.csswg.org/spec">W3C Working Group</a> Member. It should be considered highly unstable and
				subject
				to change. Stage 0 features are open to ideas and discussion, but may not be
				considered serious.</p>
			<hr>
			<h3 id="stage-1-experimental">Stage 1: Experimental</h3>
			<img src="/images/stages/stage-1.svg" alt="" align="left" width="90" height="90">
			<blockquote>
				<p>“This idea might not be silly.”</p>
			</blockquote>
			<p>An <strong>Editor’s Draft</strong> or early <strong>Working Draft</strong> <a
					href="#what-is-a-champion">championed</a> by a
				<a href="https://wiki.csswg.org/spec">W3C Working Group</a>. It should be considered highly unstable and subject to
				change. Stage 1 features are recognized as a real problem, but they may not be
				tied to any particular solution.</p>
			<hr>
			<h3 id="stage-2-allowable">Stage 2: Allowable</h3>
			<img src="/images/stages/stage-2.svg" alt="" align="left" width="90" height="90">
			<blockquote>
				<p>“This idea is not silly.”</p>
			</blockquote>
			<p>A <strong>Working Draft</strong> <a href="#what-is-a-champion">championed</a> by a <a
					href="https://wiki.csswg.org/spec">W3C Working Group</a>. It should be
				considered relatively unstable and subject to change. Stage 2 features are tied
				to a particular way of solving a problem.</p>
			<hr>
			<h3 id="stage-3-embraced">Stage 3: Embraced</h3>
			<img src="/images/stages/stage-3.svg" alt="" align="left" width="90" height="90">
			<blockquote>
				<p>“This idea is becoming part of the web.”</p>
			</blockquote>
			<p>A <strong>Candidate Recommendation</strong> <a href="#what-is-a-champion">championed</a> by a <a
					href="https://wiki.csswg.org/spec">W3C Working Group</a>, usually
				implemented by at least 2 <a href="#recognized-browser-vendors">recognized browser vendors</a>, possibly behind a
				flag.
				It should be considered stable and subject to little change. Stage 3 features
				will likely become a standard.</p>
			<hr>
			<h3 id="stage-4-standardized">Stage 4: Standardized</h3>
			<img src="/images/stages/stage-4.svg" alt="" align="left" width="90" height="90">
			<blockquote>
				<p>“This idea is part of the web.”</p>
			</blockquote>
			<p>A <strong>Recommendation</strong> <a href="#what-is-a-champion">championed</a> by the <a
					href="https://www.w3.org/">W3C</a>. It should be implemented by all
				<a href="#recognized-browser-vendors">recognized browser vendors</a>. Stage 4 features are web standards.</p>
			<hr>
			<h3 id="rejected">Rejected</h3>
			<img src="/images/stages/stage-X.svg" alt="" align="left" width="90" height="90">
			<blockquote>
				<p>“I had no idea what I was doing.”</p>
			</blockquote>
			<p>Any specification that has been rejected or neglected by its editor, or
				formally rejected by a <a href="https://wiki.csswg.org/spec">W3C Working Group</a>.</p>
			<hr>
			<h2 id="terminology">Terminology</h2>
			<h3 id="recognized-browser-vendors">Recognized Browser Vendors</h3>
			<p>Recognized browser vendors include, in alphabetical order; Apple (Safari/Webkit), Google (Chrome/Chromium) and
				Mozilla (Firefox/Gecko).</p>
			<h3 id="what-is-a-champion">What is a champion?</h3>
			<p>A champion is the person or group responsible for advocating a new feature to
				completion, performing the legwork necessary to ensure the concerns of
				interested parties are identified and incorporated into the proposal.</p>
		</aside>
	`;
}
