# CSS Features Database [<img src="https://rawgit.com/jonathantneal/media-expressions-spec/gh-pages/css-logo.svg" alt="CSS Logo" width="90" height="90" align="right">][CSS Database]

[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]

[CSS Database] is a comprehensive list of CSS features and their positions in the process of becoming implemented web standards. These positions reflect the [TC39 process].

Did you come here to update the status of a CSS feature or add a new one? Quick, read our [CONTRIBUTING.md].

## Staging Process

This staging process reflects the real-life stability of new CSS features.

You can read an [inside view of the CSSWG] to learn about the official (and unofficial) development stages of CSS specifications. In reality, specifications and browser implementations happen out of sync. Stable CSS features are missing in all browsers, while other CSS features developed outside the [CSSWG] are already behind flags in Chrome. This is too ambiguous for the web development community, and a more accountable process is desired.


### Stage 0: Aspirational
<img src="https://dl.dropboxusercontent.com/u/18590/stage--0.png" width="90px" height="90px" align="left">
> “This is a crazy idea.”

A CSS specification presented to the CSSWG by a [champion] within or outside the CSSWG. It should be considered highly unstable and subject to change.

---

### Stage 1: Experimental

<img src="https://dl.dropboxusercontent.com/u/18590/stage--1.png" width="90px" height="90px" align="left">

> “This idea might not be crazy.”

A CSS specification formally endorsed by the [CSSWG]. It should be considered highly unstable and subject to change.

---

### Stage 2: Draft

<img src="https://dl.dropboxusercontent.com/u/18590/stage--2.png" width="90px" height="90px" align="left">

> “This idea is not crazy.”

A CSS specification formally endorsed by the [CSSWG] and requiring implementations to move forward. It should be considered stable and subject to little change.

---

### Stage 3: Adoption

<img src="https://dl.dropboxusercontent.com/u/18590/stage--3.png" width="90px" height="90px" align="left">

> “This idea is becoming part of the web.”

A CSS specification formally endorsed by the [CSSWG] and being implemented by [recognized browser vendors](#recognized-browser-vendors), possibly behind a flag. It should be considered stable and subject to little change.

---

### Stage 4: Complete

<img src="https://dl.dropboxusercontent.com/u/18590/stage-4.png" width="90px" height="90px" align="left">

> “This idea is part of the web.”

A CSS specification formally endorsed by the [CSSWG] and implemented by all [recognized browser vendors](#recognized-browser-vendors).

---

### No Stage: Unrecognized

<img src="https://dl.dropboxusercontent.com/u/18590/x.png" width="90px" height="90px" align="left">

> “I have no idea what I’m doing.”

This is any specification that has not yet been presented to the [CSSWG], or that has been formally rejected or deprecated by the [CSSWG].

---

## Terminology

### Recognized Browser Vendors

Recognized browser vendors include, in alphabetical order; Apple, Google, Microsoft, Mozilla, and Opera.

### What is a champion?

A champion is the person responsible for advocating a new CSS feature to completion, performing the legwork necessary to ensure the concerns of interested [CSSWG] members are identified and incorporated into the proposal.

[Champion]: #champion
[CSSWG]: https://wiki.csswg.org/spec
[CSS Database]: https://github.com/jonathantneal/css-db
[CONTRIBUTING.md]: CONTRIBUTING.md
[fork this project]: fork
[inside view of the CSSWG]: http://fantasai.inkedblade.net/weblog/2011/inside-csswg/process
[TC39 process]: https://thefeedbackloop.xyz/tc39-a-process-sketch-stages-0-and-1/

[npm-url]: https://www.npmjs.com/package/css-db
[npm-img]: https://img.shields.io/npm/v/css-db.svg
[cli-url]: https://travis-ci.org/jonathantneal/css-db
[cli-img]: https://img.shields.io/travis/jonathantneal/css-db.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/badge/license-CC0--1.0-blue.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg
