# Changes to cssdb

## Unreleased (patch)

- Updated `@mdn/browser-compat-data` to `5.2.6` (patch)
- Updated `browserslist` to `4.21.4` (patch)
- Updated `caniuse-lite` to `1.0.30001418` (patch)

### 7.0.1 (August 23, 2022)

- Updated `@mdn/browser-compat-data` to `5.1.8` (patch)
- Updated `caniuse-lite` to `1.0.30001382` (patch)

### 7.0.0 (August 15, 2022)

- Updated most features to use data from [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)
- Updated `environment-variables` to mean **custom** environment variables. No browsers currently support this feature. (breaking)
- Added: Stage 2 `nested-calc`.
- Added: Stage 2 `text-decoration-shorthand`.
- Added: Stage 2 `float-clear-logical-values`.
- Updated `@mdn/browser-compat-data` to `5.1.8` (minor)
- Updated `browserslist` to `4.21.3` (minor)
- Updated `caniuse-lite` to `1.0.30001376` (patch)

### 6.6.3 (June 3, 2022)

- Updated `case-insensitive-attributes` plugin's url
- Updated `custom-media-queries` plugin's url
- Updated `custom-selectors` plugin's url
- Updated `not-pseudo-class` plugin's url
- Included `trigonometric-functions` plugin as bundled by PostCSS Preset Env
- Updated `@mdn/browser-compat-data` to `5.0.1` (major)
- Updated `caniuse-lite` to `1.0.30001346` (patch)
- Updated `postcss-preset-env` to `7.7.0` (minor)

### 6.6.2 (May 23, 2022)

- Added polyfills to `cascade-layer` and `trigonometric-functions`.

### 6.6.1 (May 2, 2022)

- Added polyfills to `unset-value` and `stepped-value-functions` (patch)

### 6.6.0 (May 1, 2022)

- Added: Stage 2 Exponential (`pow()`, `sqrt()`, `hypot()`, `log()`, `exp()`) functions (minor).
- Added: Stage 2 `calc()` constants (`e`, `pi`, `infinity`, `-infinity` and `NaN`) (minor).
- Added: Stage 2 Sign (`abs()` and `sign()`) functions (minor).
- Added: Stage 2 Trigonometric (`sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` and `atan2()`) functions (minor).
- Updated `@mdn/browser-compat-data` to `4.1.18` (patch)
- Updated `caniuse-lite` to `1.0.30001334` (patch)

### 6.5.0 (March 15, 2022)

- Updated `@mdn/browser-compat-data` to `4.1.11` (patch)
- Updated `astro` to `0.24.0` (minor)
- Updated `caniuse-lite` to `1.0.30001317` (patch)
- Fixed issue in which features under a flag on MDN were counting as implemented.
- Added: Stage 2 cascade layers. (minor)
- `color-mix` is now Stage 2 (was deprecated) and has links to an official spec! 🎉 (minor)

### 6.4.1 (March 7, 2022)

- Updated `@mdn/browser-compat-data` to `4.1.10` (patch). This now shows correct support for `:where` on Safari version 14.
- Updated `astro` to `0.23.7` (patch)
- Updated `browserslist` to `4.20.0` (minor)
- Updated `caniuse-lite` to `1.0.30001313` (patch)
- Updated `postcss` to `8.4.8` (patch)
- Updated `postcss-preset-env` to `7.4.2` (patch)
- Updated `stylelint` to `14.5.3` (patch)

### 6.4.0 (February 19, 2022)

- Added: `unset-value` function feature as Stage 3.
- Updated `@astropub/webapi` to`0.10.14` (patch)
- Updated `@mdn/browser-compat-data` to `4.1.8` (patch)
- Updated `astro` to `0.23.0` (minor)
- Updated `browserslist` to `4.19.3` (patch)
- Updated `postcss-preset-env` to `7.4.1` (minor)
- Updated `stylelint` to `14.5.1` (minor)

### 6.3.1 (February 16, 2022)

- Fix certain examples
- Adding new features to PostCSS Preset Env bundled collection.
- Ensuring all features that have plugins have them listed.

### 6.3.0 (February 12, 2022) 

- Added: Stage 2 `oklab` function (minor).
- Added missing polyfills for `clamp()`, `opacity` percentages, `:is` pseudo and `display-two-values`.
- Fixed `and_chr` and `android` browsers always using the latest version on Can I Use, now leverages Desktop version if the supported version is the latest one. See [Fyrd/caniuse#3518](https://github.com/Fyrd/caniuse/issues/3518).
- Updated `stylelint` to `14.5.0` (minor)
- Updated `caniuse-lite` to `1.0.30001311` (patch)
- Updated `postcss-preset-env` to `7.3.2` (patch)

### 6.2.1 (February 10, 2022)

- Returning `example` to the exported DB (removed on `6.0.0`).
- Removed outdated plugin from Container Queries.
- Added link to experimental version of `:has`.
- Updated `@astropub/webapi` to `0.10.13` (patch)
- Updated `@mdn/browser-compat-data` to `4.1.7` (patch)
- Updated `caniuse-lite` to `1.0.30001310` (patch)
- Updated `stylelint` to `14.4.0` (minor)
- Updated `stylelint-config-standard` to`25.0.0` (major)

### 6.2.0 (February 5, 2022)

- Added: `color()` function feature as Stage 2.
- Fixed `vendors_implementations` so it doesn't count unreleased browsers.
- Updated `postcss-preset-env` to `^7.3.1` (minor)
- Updated `@mdn/browser-compat-data` to `^4.1.6` (patch)
- Updated `caniuse-lite` to `^1.0.30001307` (patch)
- Updated `postcss` to `^8.4.6` (patch)

### 6.1.0 (January 31, 2022)

- `blank-pseudo-class` is now Stage 2 and has links to an official spec! 🎉 (minor)
- `clamp` is now Stage 2 and has links to an official spec! 🎉 (minor)
- `color-contrast` is now Stage 2 and has links to an official spec! 🎉 (minor)
- `color-functional-notation` is now Stage 2 and has links to an official spec! 🎉 (minor)
- `custom-media-queries` is now Stage 2 and has links to an official spec! 🎉 (minor)
- `display-two-values` is now Stage 2 and has links to an official spec! 🎉 (minor)
- `opacity-percentage` is now Stage 2 and has links to an official spec! 🎉 (minor)
- `prefers-color-scheme-query` is now Stage 2 and has links to an official spec! 🎉 (minor)
- `prefers-reduced-motion-query` is now Stage 2 and has links to an official spec! 🎉 (minor)
- `where-pseudo-class` is now Stage 2 and has links to an official spec! 🎉 (minor)
- `container-queries` has official Working Draft linked (instead of Editor's Draft).
- `nesting-rules` has official Working Draft linked (instead of Editor's Draft).
- `overscroll-behavior-property` has official Working Draft linked (instead of Editor's Draft).
- Updated `@mdn/browser-compat-data` to `4.1.5` (patch)
- Updated `@astropub/webapi` to `0.10.11` (patch)
- Updated `astro` to `0.22.20` (patch)
- Updated `caniuse-lite` to `1.0.30001304` (patch)
- Updated `stylelint` to `14.3.0` (minor)

### 6.0.2 (January 21, 2022)

- Updated mechanism to calculate browser versions to be more reliable. This also introduces the option through `allow_partial_implementation` if we want to allow something such as Autoprefixer to take care with prefixing a given feature such as `:any-link`.
- Ensuring pre-releases aren't counted as vendor implementation. This was flagging that `:has` had 1 vendor implementation, but it's not in stable Safari yet.
- Removed `media-query-ranges` support data as it was not correct that Firefox supports it fully. See [#57](https://github.com/csstools/cssdb/issues/57) and [mdn/browser-compat-data#14593](https://github.com/mdn/browser-compat-data/issues/14593)
- Updated `@mdn/browser-compat-data` to `4.1.4` (patch)
- Updated `astro` to `0.22.16` (patch)
- Updated `caniuse-lite` to `1.0.30001300` (patch)

### 6.0.1 (January 7, 2022) 

- Updated: Conditional media queries now Stage 2 and has links to an official spec! 🎉 (minor)
- Updated `astro` to `0.22.8` (patch).
- Updated `caniuse-lite` to `1.0.30001297` (patch).

### 6.0.0 (January 7, 2022)

- Exported CSSDB no longer exposes `example`, `caniuse` nor `caniuse-compat` (breaking).
- Added `browser_support` field that contains a dictionary with the earliest supported version.
- Added a mechanism to fetch browser support from [mdn](https://github.com/mdn/browser-compat-data).
- Added `vendors_implementations` that states how many vendors have implemented the feature.
- Added: Stage 1 `clamp()` function (minor)
- Added: Stage 1 Two values syntax for `display` (minor)
- Added: Stage 1 percentages for opacity (minor)
- Updated `postcss-preset-env` to `7.2.0` (minor).
- Updated `@astropub/webapi` to `0.10.2` (minor).
- Updated `astro` to `0.22.7` (patch).
- Updated `caniuse-lite` to `1.0.30001296` (patch).

### 5.1.0 (January 4, 2022)

- Updated: All plugins urls are pointing to the right place.
- Added: Exported now a cssdb.mjs to allow support of ESM modules.
- Added: `color-contrast()` function.
- Added: Container Queries.
- Updated: `env()` now has Browser Support table.
- Updated: `nesting-rules` now have Browser Support table and Can I Use property.
- Updated: `prefers-color-scheme` Media Query Browser Support.
- Updated: Font `format()` Keywords now has MDN docs.
- Updated: `hwb()` Function now has MDN docs.
- Updated: `ic` unit now has MDN docs.
- Updated: `lch()` Function now has MDN docs.
- Updated: `:matches()` Pseudo Class now has MDN docs.
- Updated: `:where()` Zero-Specificity Pseudo-Class now has MDN docs.
- Updated: `all` Property is now Stage 3! 🎉
- Updated: `gray()` function is now Stage -1! 🙁

### 5.0.0 (May 24, 2019)

- Removed: Rejected `:matches()` psuedo-class (major)
- Added: Stage 2 `:is()` pseudo-class (minor)
- Added: MDN docs for `image-set-function` (patch)
- Added: MDN docs for `:blank` pseudo-class (patch)

### 4.4.0 (March 7, 2019)

- Updated: Nesting Rules are now Stage 1! 🎉

### 4.3.0 (December 12, 2018)

- Added: `:blank` Empty-Value Pseudo-Class
- Added: caniuse link for `:has()` Relational Pseudo-Class
- Added: JavaScript Library and PostCSS Plugin links for the `:blank`
  Empty-Value Pseudo-Class and the `:has()` Relational Pseudo-Class

### 4.2.0 (November 4, 2018)

- Added: Documentation links to MDN
- Added: `color-adjust` Property
- Added: `overscroll-behavior` Property
- Added: `prefers-color-scheme` Media Query
- Added: `prefers-reduced-motion` Media Query
- Added: `:in-range` and `:out-of-range` Pseudo-Classes
- Added: `:read-only` and `:read-write` selectors

This also updates the cssdb.org template and styles, using postcss-preset-env
to create and minifying cross-browser compatible css, improving font loading
and display, supporting RTL displays, and adding MDN documentation.

### 4.1.1 (October 28, 2018)

- Added: caniuse link for `overflow` shorthand property

### 4.1.0 (October 28, 2018)

- Added: Double Position Gradients

### 4.0.0 (October 23, 2018)

- Changed: `:something()` is now `:where()` and moved from Stage 2 to Stage 1

### 3.2.1 (August 31st, 2018)

- Updated: caniuse-like browser statistics for Custom Environment Variables

I really wish caniuse would start adding some of these.

### 3.2.0 (August 30th, 2018)

- Removed: Rejected `color-mod()` function
- Updated: Overflow shorthand is now Stage 2
- Updated: caniuse-like browser statistics for Custom Environment Variables and
  Overflow Shorthand

### 3.1.0 (May 11th, 2018)

- Added: Polyfills for `lab-function` and `lch-function`

### 3.0.0 (May 10th, 2018)

- Changed: All stages from 1-4 to 0-4 to align with TC39
- Updated: Tests, badges, descriptions, and dependencies

### 2.2.0 (May 7th, 2018)

- Added: Place Properties as Stage 2
- Added: PostCSS plugin for Color Functional Notation
- Updated: Media Query Ranges to Stage 4

### 2.1.0 (May 1st, 2018)

- Added: Environment Variables as Stage 1
- Added: `overflow` Property as Stage 2
- Added: Gap Properties as Stage 4

### 2.0.0 (April 7th, 2018)

- Renamed: GitHub repository from `css-db` to `cssdb`, now aligning with npm
- Renamed: All feature IDs.
- Updated: Documentation.

Notes: The old feature IDs were problematic because they attempted to follow
specification section IDs, but some specifications weren’t aren’t always
covered by a single section, and many sections were inconsistently named.
Because there was no pattern one could predict for any of the headings, a new
system was created; to **name** the feature and provide **context**. This meant
a feature ID like `css-cascade-all-shorthand` became `all-property`, and
`css-fonts-propdef-font-variant` became `font-variant-property`, etc. This
greatly simplified all of the feature IDs and allowed for more predictive
naming moving forward.

### 1.6.0 (February 18th, 2018)

- Added: Break Properties

### 1.5.2 (February 18th, 2018)

- Updated: `:focus-within` polyfills

### 1.5.1 (February 17th, 2018)

- Fixed: `:focus-visible` and `:focus-within` title syntax

### 1.5.0 (January 22th, 2018)

- Changed: Use the latest published specification URL whenever possible
- Changed: Upgrade Color #RRGGBBAA Notation to Stage 3
- Changed: Upgrade Color gray() Function to Stage 3
- Changed: Upgrade Color color-mod() Function to Stage 3
- Changed: Upgrade Color hwb() Function to Stage 3
- Changed: Downgrade Custom Properties to Stage 4
- Fixed: Color hwb() Function example
- Fixed: the Color rebeccapurple PostCSS Plugin URL

### 1.4.0 (January 16th, 2018)

- Changed: polyfill for `css-color-modifying-colors`

### 1.3.0 (January 8th, 2018)

- Added: caniuse references for `css-logical` and `css-fonts-system-ui-def`
- Fixed: caniuse parsing for browser support

### 1.2.0 (January 8th, 2018)

- Fixed: specification identifiers for `css-color-hwb-notation`,
         `selectors-dir-pseudo`
- Fixed: Examples for Media Queries Custom Media Queries

### 1.1.0 (September 27th, 2017)

- Added: Image `image-set()` Function, Selector `:dir` Pseudo-Class,
         Selector `:any-link` Pseudo-Class, Text `overflow-wrap` Property,
         Font `system-ui` Family, Cascade `all` Property
- Added: caniuse identifiers
- Fixed: Examples for Nesting, Media Queries Ranges

### 1.0.0 (September 6th, 2017)

- Initial version
