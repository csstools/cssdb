# CSS Features Database [<img src="https://rawgit.com/jonathantneal/media-expressions-spec/gh-pages/css-logo.svg" alt="CSS Logo" width="90" height="90" align="right">][CSS Database]

[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]

[CSS Database] is a comprehensive list of CSS features and their positions in
the process of becoming implemented web standards.

Did you come here to update the status of a CSS feature or add a new one?
Quick, read our [CONTRIBUTING.md].

## Staging Process

Staging processes allow developers to accomplish real things and get involved
in the creation of standards, testing, feedback, and new use cases.

This staging process reflects the real-life stability of new CSS features.

You can read an [inside view of the CSSWG] to learn about the official
(and unofficial) development stages of CSS specifications. In reality,
specifications and browser implementations happen out of sync. For example,
there are stable CSS features missing in all browsers, while other CSS features
developed outside the [CSSWG] have appeared in browsers behind flags. This is
too ambiguous for the web development community, and a more accountable process
is desired.

### Stage 0: Aspirational

<img src="https://jonathantneal.github.io/css-db/stage-0.svg" align="left" width="90" height="90">

> “This is my crazy idea.”

An **Editor’s Draft** [championed] by a non-[CSSWG] member. It should be
considered highly unstable and subject to change.

---

### Stage 1: Enthusiastic

<img src="https://jonathantneal.github.io/css-db/stage-1.svg" align="left" width="90" height="90">

> “This is a crazy idea.”

An **Editor’s Draft** [championed] by a [CSSWG] member. It should still be
considered highly unstable and subject to change.

---

### Stage 2: Experimental

<img src="https://jonathantneal.github.io/css-db/stage-2.svg" align="left" width="90" height="90">

> “This idea might not be crazy.”

An **Editor’s Draft** [hosted] by the [CSSWG] or [W3C]. It should still be
considered highly unstable and subject to change.

---

### Stage 3: Allowable

<img src="https://jonathantneal.github.io/css-db/stage-3.svg" align="left" width="90" height="90">

> “This idea is not crazy.”

A **Working Draft** [hosted] by the [CSSWG] or [W3C] and requiring
implementations to move forward. It should be considered stable and subject to
little change. It is still subject to rejection as a standard.

---

### Stage 4: Embraced

<img src="https://jonathantneal.github.io/css-db/stage-4.svg" align="left" width="90" height="90">

> “This idea is becoming part of the web.”

A **Candidate Recommendation** [hosted] by the [CSSWG] or [W3C] and being
implemented by at least 2 [recognized browser vendors], possibly behind a flag.
It should be considered stable and subject to little change. It will likely
become a standard.

---

### Stage 5: Standardized

<img src="https://jonathantneal.github.io/css-db/stage-5.svg" align="left" width="90" height="90">

> “This idea is part of the web.”

A **Recommendation** [hosted] by the [CSSWG] or [W3C] and implemented by all
[recognized browser vendors]. It is a standard.

---

### Rejected

<img src="https://jonathantneal.github.io/css-db/stage-X.svg" align="left" width="90" height="90">

> “I had no idea what I was doing.”

This is any specification that has been rejected or neglected by its editor, or
formally rejected by the [CSSWG].

---

## Terminology

### Recognized Browser Vendors

Recognized browser vendors include, in alphabetical order; Apple, Google,
Microsoft, Mozilla, and Opera.

### What is a champion?

A champion is the person responsible for advocating a new feature to
completion, performing the legwork necessary to ensure the concerns of
interested parties are identified and incorporated into the proposal. Once the
[CSSWG] hosts the draft for a feature, its champion is recognized as the
organization itself.

[CSS Database]: https://github.com/jonathantneal/css-db

[npm-url]: https://www.npmjs.com/package/css-db
[npm-img]: https://img.shields.io/npm/v/css-db.svg
[cli-url]: https://travis-ci.org/jonathantneal/css-db
[cli-img]: https://img.shields.io/travis/jonathantneal/css-db.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/badge/license-CC0--1.0-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[championed]: #what-is-a-champion
[CONTRIBUTING.md]: CONTRIBUTING.md
[CSSWG]: https://wiki.csswg.org/spec
[fork this project]: fork
[hosted]: #what-is-a-champion
[inside view of the CSSWG]: http://fantasai.inkedblade.net/weblog/2011/inside-csswg/process
[recognized browser vendors]: #recognized-browser-vendors
[W3C]: https://www.w3.org/
