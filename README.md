# CSS Database [<img src="https://rawgit.com/jonathantneal/media-expressions-spec/gh-pages/css-logo.svg" alt="CSS Logo" width="90" height="90" align="right">][CSS Database]

[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]

[CSS Database] is a comprehensive list of CSS features and their positions in the process of becoming implemented web standards. These positions reflect the [TC39 process].

## Staging Process

This staging process reflects the real-life stability of new CSS features.

You can read an [inside view of the CSSWG] to learn about the official (and unofficial) development stages of CSS specifications. In reality, specifications and browser implementations happen out of sync. Stable CSS features are missing in all browsers, while other CSS features developed outside the [CSSWG] are already behind flags in Chrome. This is too ambiguous for the web development community, and a more accountable process is desired.

#### Stage 0: Aspirational

> “This is a crazy idea.”

A CSS specification presented to the CSSWG by a [champion] within or outside the CSSWG. It should be considered highly instable and subject to change.

#### Stage 1: Experimental

> “This idea might not be crazy.”

A CSS specification formally endorsed by the [CSSWG]. It should be considered highly instable and subject to change.

#### Stage 2: Draft

> “This idea is not crazy.”

A CSS specification formally endorsed by the [CSSWG] and requiring implementations to move forward. It should be considered stable and subject to little change.

#### Stage 3: Adoption

> “This idea is becoming part of the web.”

A CSS specification formally endorsed by the [CSSWG] and being implemented by [recognized browser vendors], possibly behind a flag. It should be considered stable and subject to little change.

#### Stage 4: Complete

> “This idea is part of the web.”

A CSS specification formally endorsed by the [CSSWG] and implemented by all [recognized browser vendors].

#### No Stage: Unrecognized

> “I have no idea what I’m doing.”

This is any specification that has not yet been presented to the [CSSWG], or that has been formally rejected or deprecated by the [CSSWG].

## Contributing

### Join the CSSWG

Passionate and informed developers should consider joining the CSSWG. Read the [instructions for joining the CSSWG]. Pull requests are welcomed to update this section with a beginner-friendly version of those instructions.

### Update this database

Pull requests are some of the greatest contributions, so be sure they are focused in scope and avoid unrelated commits.

- All contributions must follow the syntax and style of existing JSON files, which;
	1. Exist as `features/${ feature }.json`, where `feature` is a thematic, [kebab-case] label representing the title and category of the feature.
	2. Include all the [required fields].

- New features include a link to a specification, which;
	1. Describes what the feature does in as few words as possible.
	2. Describes why the feature exists in as few words as possible.
	3. Describes how the feature and its parts operate as clearly and completely as possible.

- Changing features include a relevant citation proving its new position in the [staging process].

For best results, be sure your contributions make sense to everyone else. If you’re unfamiliar with git, consider the following workflow.

1. To begin, [fork this project], clone your fork, and add our upstream.
	```bash
	# Clone your fork of the repo into the current directory
	git clone https://github.com/<your-user>/${ id }
	# Navigate to the newly cloned directory
	cd ${ id }
	# Assign the original repo to a remote called "upstream"
	git remote add upstream https://github.com/${ user }/${ id }
	# Install the tools necessary for development
	npm install
	```

2. Create a branch for your feature or update:
	```bash
	# Move into a new branch for a feature
	git checkout -b feature/thing
	```
	```bash
	# Or, move into a new branch for a update
	git checkout -b update/something
	```

3. Be sure your code follows our practices.
	```bash
	# Test current code
	npm test
	```

4. Push your branch up to your fork:
	```bash
	# Push a feature branch
	git push origin feature/thing
	```
	```bash
	# Or, push a fix branch
	git push origin fix/something
	```

---

## Terminology

### Required Fields

Required fields within a JSON file are, in order:

- **`title`**: a unique name for the feature.
- **`description`**: a brief description of the feature.
- **`specification`**: a link to the latest draft of the specification.
- **`stage`**: the position of the feature within the [staging process]. Stages should be a number, and unrecognized stages should be `null`.
- **`citations`**: an array of links related to the feature or its progress.

### Additional Fields

Additional fields within a JSON file may be, in order:

- **`issues`**: a link to issue tracking for the feature.
- **`polyfills`**: an array of links to polyfills for the feature. Each link contains a `name` and `link` field, in that order.

### Recognized Browser Vendors

Recognized browser vendors include, in alphabetical order; Apple, Google, Microsoft, Mozilla, and Opera.

### Champion

A champion is the person responsible for advocating a new CSS feature to completion, performing the legwork necessary to ensure the concerns of interested [CSSWG] members are identified and incorporated into the proposal.

[Champion]: #champion
[CSSWG]: https://wiki.csswg.org/spec
[CSS Database]: https://github.com/jonathantneal/css-db
[fork this project]: fork
[inside view of the CSSWG]: http://fantasai.inkedblade.net/weblog/2011/inside-csswg/process
[instructions for joining the CSSWG]: https://www.w3.org/2004/01/pp-impl/32061/instructions
[kebab-case]: http://wiki.c2.com/?KebabCase
[recognized browser vendors]: #recognized-browser-vendors
[required fields]: #required-fields
[staging process]: #staging-process
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
