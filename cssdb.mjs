export default [
  {
    "id": "all-property",
    "title": "`all` Property",
    "description": "A property for defining the reset of all properties of an element",
    "specification": "https://www.w3.org/TR/css-cascade-3/#all-shorthand",
    "stage": 4,
    "browser_support": {
      "and_chr": "37",
      "and_ff": "27",
      "android": "37",
      "chrome": "37",
      "edge": "79",
      "firefox": "27",
      "ios_saf": "9.3",
      "oculus": "5.0",
      "op_mob": "24",
      "opera": "24",
      "safari": "9.1",
      "samsung": "3.0",
      "webview_ios": "9.3"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/all"
    },
    "example": "a {\n  all: initial;\n}",
    "interoperable_at": 1579046400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/maximkoretskiy/postcss-initial"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "any-link-pseudo-class",
    "title": "`:any-link` Hyperlink Pseudo-Class",
    "description": "A pseudo-class for matching anchor elements independent of whether they have been visited",
    "specification": "https://www.w3.org/TR/selectors-4/#any-link-pseudo",
    "stage": 2,
    "browser_support": {
      "and_chr": "18",
      "and_ff": "4",
      "android": "37",
      "chrome": "1",
      "edge": "79",
      "firefox": "1",
      "ios_saf": "1",
      "oculus": "5.0",
      "op_mob": "14",
      "opera": "15",
      "safari": "3",
      "samsung": "1.0",
      "webview_ios": "1"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link"
    },
    "example": "nav :any-link > span {\n  background-color: yellow;\n}",
    "interoperable_at": 1579046400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-pseudo-class-any-link"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "blank-pseudo-class",
    "title": "`:blank` Empty-Value Pseudo-Class",
    "description": "A pseudo-class for matching form elements when they are empty",
    "specification": "https://www.w3.org/TR/selectors-4/#blank",
    "stage": 2,
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:blank"
    },
    "example": "input:blank {\n  background-color: yellow;\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-blank-pseudo"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-blank-pseudo"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "break-properties",
    "title": "Break Properties",
    "description": "Properties for defining the break behavior between and within boxes",
    "specification": "https://www.w3.org/TR/css-break-3/#breaking-controls",
    "stage": 3,
    "browser_support": {
      "and_chr": "51",
      "and_ff": "92",
      "android": "51",
      "chrome": "51",
      "edge": "12",
      "firefox": "92",
      "oculus": "5.0",
      "op_mob": "37",
      "opera": "11.1",
      "samsung": "5.0"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-after"
    },
    "example": "a {\n  break-inside: avoid;\n  break-before: avoid-column;\n  break-after: always;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/shrpne/postcss-page-break"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "calc-constants",
    "title": "`e`, `pi`, `infinity`, `-infinity` and `NaN` constants for calculation",
    "description": "Constants for calculation simplification",
    "specification": "https://drafts.csswg.org/css-values-4/#calc-keywords",
    "stage": 2,
    "browser_support": {
      "and_chr": "110",
      "and_ff": "114",
      "android": "110",
      "chrome": "110",
      "edge": "110",
      "firefox": "114",
      "ios_saf": "16",
      "op_mob": "74",
      "opera": "96",
      "safari": "16",
      "samsung": "21.0",
      "webview_ios": "16"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/calc-keyword"
    },
    "example": "p {\n  font-size: calc(pow(e, pi) * 1rem);\n}",
    "interoperable_at": 1686009600,
    "vendors_implementations": 3
  },
  {
    "id": "cascade-layers",
    "title": "CSS Cascade Layers",
    "description": "The `@layer` at-rule allows authors to explicitly layer their styles in the cascade, before specificity and order of appearance are considered.",
    "specification": "https://www.w3.org/TR/css-cascade-5/#layering",
    "stage": 2,
    "browser_support": {
      "and_chr": "99",
      "and_ff": "97",
      "android": "99",
      "chrome": "99",
      "edge": "99",
      "firefox": "97",
      "ios_saf": "15.4",
      "oculus": "21.0",
      "op_mob": "68",
      "opera": "85",
      "safari": "15.4",
      "samsung": "18.0",
      "webview_ios": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@layer"
    },
    "example": "/* Un-layered styles have the highest priority */\na {\n  color: mediumvioletred;\n}\n\n@layer defaults {\n  a { color: maroon; }\n}",
    "interoperable_at": 1647216000,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-cascade-layers"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "cascade-layers"
  },
  {
    "id": "case-insensitive-attributes",
    "title": "Case-Insensitive Attributes",
    "description": "An attribute selector matching attribute values case-insensitively",
    "specification": "https://www.w3.org/TR/selectors-4/#attribute-case",
    "stage": 2,
    "browser_support": {
      "and_chr": "49",
      "and_ff": "47",
      "android": "49",
      "chrome": "49",
      "edge": "79",
      "firefox": "47",
      "ios_saf": "9",
      "oculus": "5.0",
      "op_mob": "36",
      "opera": "36",
      "safari": "9",
      "samsung": "5.0",
      "webview_ios": "9"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
    },
    "example": "[frame=hsides i] {\n  border-style: solid none;\n}",
    "interoperable_at": 1579046400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-attribute-case-insensitive"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "clamp",
    "title": "`clamp` Function",
    "description": "The clamp() CSS function clamps a value between an upper and lower bound. It enables selecting a middle value within a range of values between a defined minimum and maximum.",
    "specification": "https://www.w3.org/TR/css-values-4/#funcdef-clamp",
    "stage": 2,
    "browser_support": {
      "and_chr": "79",
      "and_ff": "79",
      "android": "79",
      "chrome": "79",
      "edge": "79",
      "firefox": "75",
      "ios_saf": "13.4",
      "oculus": "8.0",
      "op_mob": "57",
      "opera": "66",
      "safari": "13.1",
      "samsung": "12.0",
      "webview_ios": "13.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp"
    },
    "example": "button {\n  font-size: clamp(1rem, 2.5vw, 2rem);\n}",
    "interoperable_at": 1595894400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/polemius/postcss-clamp"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "color-adjust",
    "title": "`color-adjust` Property",
    "description": "The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images",
    "specification": "https://www.w3.org/TR/css-color-4/#color-adjust",
    "stage": 2,
    "browser_support": {
      "and_ff": "97",
      "firefox": "97",
      "ios_saf": "15.4",
      "safari": "15.4",
      "webview_ios": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/print-color-adjust"
    },
    "example": ".background {\n  background-color:#ccc;\n}\n.background.color-adjust {\n  color-adjust: economy;\n}\n.background.color-adjust-exact {\n  color-adjust: exact;\n}",
    "vendors_implementations": 2
  },
  {
    "id": "color-function",
    "title": "`color()` Function",
    "description": "A function that allows a color to be specified in a particular, specified color space rather than the implicit sRGB color space that most of the other color functions operate in.",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-color",
    "stage": 2,
    "browser_support": {
      "and_chr": "111",
      "and_ff": "113",
      "android": "111",
      "chrome": "111",
      "edge": "111",
      "firefox": "113",
      "ios_saf": "15",
      "op_mob": "75",
      "opera": "97",
      "safari": "15",
      "samsung": "22.0",
      "webview_ios": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color"
    },
    "example": "p {\n  color: color(display-p3 1 0.5 0);\n  color: color(display-p3 1 0.5 0 / .5);\n}",
    "interoperable_at": 1683590400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-function"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "color-function"
  },
  {
    "id": "color-functional-notation",
    "title": "Color Functional Notation",
    "description": "A space and slash separated notation for specifying colors",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-rgb",
    "stage": 2,
    "browser_support": {
      "and_chr": "65",
      "and_ff": "52",
      "android": "65",
      "chrome": "65",
      "edge": "79",
      "firefox": "52",
      "ios_saf": "12.2",
      "oculus": "5.0",
      "op_mob": "47",
      "opera": "52",
      "safari": "12.1",
      "samsung": "9.0",
      "webview_ios": "12.2"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb#syntax"
    },
    "example": "em {\n  background-color: hsl(120deg 100% 25%);\n  color: rgb(0 255 0);\n}",
    "interoperable_at": 1579046400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-functional-notation"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "color-mix",
    "title": "`color-mix()` Function",
    "description": "A function for mixing colors",
    "specification": "https://www.w3.org/TR/css-color-5/#color-mix",
    "stage": 2,
    "browser_support": {
      "and_chr": "111",
      "and_ff": "113",
      "android": "111",
      "chrome": "111",
      "edge": "111",
      "firefox": "113",
      "ios_saf": "16.2",
      "op_mob": "75",
      "opera": "97",
      "safari": "16.2",
      "samsung": "22.0"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
    },
    "example": "p {\n  color: color-mix(in lch, purple 50%, plum 50%);\n}",
    "interoperable_at": 1683590400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-mix-function"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "color-mix"
  },
  {
    "id": "container-queries",
    "title": "Container Queries",
    "description": "New container property and container at rule to make changes depending on the container's size",
    "specification": "https://www.w3.org/TR/css-contain-3/#container-queries",
    "stage": 2,
    "browser_support": {
      "and_chr": "105",
      "and_ff": "110",
      "android": "105",
      "chrome": "105",
      "edge": "105",
      "firefox": "110",
      "ios_saf": "16",
      "op_mob": "72",
      "opera": "91",
      "safari": "16",
      "samsung": "20.0",
      "webview_ios": "16"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries"
    },
    "example": ".container {\n  contain: layout inline-size;\n}\n\n@container (min-width: 700px) {\n  .container {\n    /* styles applied when a container is at least 700px */\n  }\n}",
    "interoperable_at": 1676332800,
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://www.npmjs.com/package/container-query-polyfill"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "container-queries"
  },
  {
    "id": "content-alt-text",
    "title": "Alt text for `content`",
    "description": "Syntax that allows setting alternative text",
    "specification": "https://drafts.csswg.org/css-content/#content-property",
    "stage": 2,
    "browser_support": {
      "and_chr": "77",
      "and_ff": "128",
      "android": "77",
      "chrome": "77",
      "edge": "79",
      "firefox": "128",
      "ios_saf": "17.4",
      "oculus": "7.0",
      "op_mob": "55",
      "opera": "64",
      "safari": "17.4",
      "samsung": "12.0",
      "webview_ios": "17.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/content#adding_an_image_with_alternative_text"
    },
    "example": ".element {\n  content: url(tree.jpg) / \"image with a tree\";\n}",
    "interoperable_at": 1720483200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-content-alt-text"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "contrast-color-function",
    "title": "`contrast-color()` Function",
    "description": "Dynamically specifying a text color with adequate contrast.",
    "specification": "https://drafts.csswg.org/css-color-5/#contrast-color",
    "stage": 2,
    "browser_support": {},
    "docs": {},
    "example": "p {\n  color: contrast-color( purple max );\n}",
    "polyfills": [],
    "vendors_implementations": 0
  },
  {
    "id": "custom-media-queries",
    "title": "Custom Media Queries",
    "description": "An at-rule for defining aliases that represent media queries",
    "specification": "https://www.w3.org/TR/mediaqueries-5/#at-ruledef-custom-media",
    "stage": 2,
    "browser_support": {},
    "example": "@custom-media --narrow-window (max-width: 30em);\n\n@media (--narrow-window) {}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "custom-properties",
    "title": "Custom Properties",
    "description": "A syntax for defining custom values accepted by all CSS properties",
    "specification": "https://www.w3.org/TR/css-variables-1/",
    "stage": 3,
    "browser_support": {
      "and_chr": "49",
      "and_ff": "31",
      "android": "50",
      "chrome": "49",
      "edge": "15",
      "firefox": "31",
      "ios_saf": "9.3",
      "oculus": "5.0",
      "op_mob": "36",
      "opera": "36",
      "safari": "9.1",
      "samsung": "5.0",
      "webview_ios": "9.3"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/var"
    },
    "example": ":root {\n  --some-length: 32px;\n\n  height: var(--some-length);\n  width: var(--some-length);\n}",
    "interoperable_at": 1491350400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-properties"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "custom-properties"
  },
  {
    "id": "custom-selectors",
    "title": "Custom Selectors",
    "description": "An at-rule for defining aliases that represent selectors",
    "specification": "https://drafts.csswg.org/css-extensions/#custom-selectors",
    "stage": 1,
    "browser_support": {},
    "example": "@custom-selector :--heading h1, h2, h3, h4, h5, h6;\n\narticle :--heading + p {}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-selectors"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "dir-pseudo-class",
    "title": "`:dir` Directionality Pseudo-Class",
    "description": "A pseudo-class for matching elements based on their directionality",
    "specification": "https://www.w3.org/TR/selectors-4/#dir-pseudo",
    "stage": 2,
    "browser_support": {
      "and_chr": "120",
      "and_ff": "49",
      "android": "120",
      "chrome": "120",
      "edge": "120",
      "firefox": "49",
      "ios_saf": "16.4",
      "op_mob": "80",
      "opera": "106",
      "safari": "16.4",
      "samsung": "25.0",
      "webview_ios": "16.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:dir"
    },
    "example": "blockquote:dir(rtl) {\n  margin-right: 10px;\n}\n\nblockquote:dir(ltr) {\n  margin-left: 10px;\n}",
    "interoperable_at": 1701907200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-dir-pseudo-class"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "display-two-values",
    "title": "Two values syntax for `display`",
    "description": "Syntax that allows definition of outer and inner displays types for an element",
    "specification": "https://www.w3.org/TR/css-display-3/#the-display-properties",
    "stage": 2,
    "browser_support": {
      "and_chr": "115",
      "and_ff": "79",
      "android": "115",
      "chrome": "115",
      "edge": "115",
      "firefox": "70",
      "ios_saf": "15",
      "op_mob": "77",
      "opera": "101",
      "safari": "15",
      "samsung": "23.0",
      "webview_ios": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/display/multi-keyword_syntax_of_display"
    },
    "example": ".element {\n  display: inline flow-root;\n  display: inline flex;\n  display: block grid;\n}",
    "interoperable_at": 1689897600,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-normalize-display-values"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "double-position-gradients",
    "title": "Double Position Gradients",
    "description": "A syntax for using two positions in a gradient.",
    "specification": "https://www.w3.org/TR/css-images-4/#color-stop-syntax",
    "stage": 2,
    "browser_support": {
      "and_chr": "72",
      "and_ff": "83",
      "android": "72",
      "chrome": "72",
      "edge": "79",
      "firefox": "83",
      "ios_saf": "12.2",
      "oculus": "6.0",
      "op_mob": "51",
      "opera": "60",
      "safari": "12.1",
      "samsung": "11.0",
      "webview_ios": "12.2"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient"
    },
    "example": ".pie_chart {\n  background-image: conic-gradient(yellowgreen 40%, gold 0deg 75%, #f06 0deg);\n}",
    "interoperable_at": 1605571200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-double-position-gradients"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "environment-variables",
    "title": "Custom Environment Variables",
    "description": "A syntax for using custom values accepted by CSS globally",
    "specification": "https://drafts.csswg.org/css-env-1/",
    "stage": 0,
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/env"
    },
    "example": "@media (max-width: env(--brand-small)) {\n  body {\n    padding: env(--brand-spacing);\n  }\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-env-function"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "exponential-functions",
    "title": "`pow()`, `sqrt()`, `hypot()`, `log()`, `exp()` exponential functions",
    "description": "Compute various exponential functions with their arguments",
    "specification": "https://www.w3.org/TR/css-values-4/#exponent-funcs",
    "stage": 2,
    "browser_support": {
      "and_chr": "120",
      "and_ff": "118",
      "android": "120",
      "chrome": "120",
      "edge": "120",
      "firefox": "118",
      "ios_saf": "15.4",
      "op_mob": "80",
      "opera": "106",
      "safari": "15.4",
      "samsung": "25.0",
      "webview_ios": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/exp"
    },
    "example": "p {\n  font-size: calc(pow(10, 12) * 1rem);\n  font-size: calc(sqrt(100) * 1rem);\n  font-size: calc(hypot(3, 4) * 1rem);\n  font-size: calc(log(10) * 1rem);\n  font-size: calc(exp(10) * 1rem);\n}",
    "interoperable_at": 1701907200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-exponential-functions"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "fangsong-font-family",
    "title": "`fangsong` Font Family",
    "description": "A generic font used for Fang Song (仿宋) typefaces in Chinese",
    "specification": "https://www.w3.org/TR/css-fonts-4/#fangsong-def",
    "stage": 2,
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#Syntax"
    },
    "example": "body {\n  font-family: fangsong;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-font-family-fangsong"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "float-clear-logical-values",
    "title": "Logical Values in float and clear",
    "description": "Flow-relative (inline-start and inline-end) values for float and clear",
    "specification": "https://www.w3.org/TR/css-logical-1/",
    "stage": 2,
    "browser_support": {
      "and_chr": "118",
      "and_ff": "55",
      "android": "118",
      "chrome": "118",
      "edge": "118",
      "firefox": "55",
      "ios_saf": "15",
      "op_mob": "79",
      "opera": "104",
      "safari": "15",
      "samsung": "25.0",
      "webview_ios": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/float"
    },
    "example": "span:first-child {\n  float: inline-start;\n}",
    "interoperable_at": 1697155200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical-float-and-clear"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "focus-visible-pseudo-class",
    "title": "`:focus-visible` Focus-Indicated Pseudo-Class",
    "description": "A pseudo-class for matching focused elements that indicate that focus to a user",
    "specification": "https://www.w3.org/TR/selectors-4/#focus-visible-pseudo",
    "stage": 2,
    "browser_support": {
      "and_chr": "86",
      "and_ff": "85",
      "android": "86",
      "chrome": "86",
      "edge": "86",
      "firefox": "85",
      "ios_saf": "15.4",
      "oculus": "12.0",
      "op_mob": "61",
      "opera": "72",
      "safari": "15.4",
      "samsung": "14.0",
      "webview_ios": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"
    },
    "example": ":focus:not(:focus-visible) {\n  outline: 0;\n}",
    "interoperable_at": 1647216000,
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/WICG/focus-visible"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-focus-visible"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "focus-visible"
  },
  {
    "id": "focus-within-pseudo-class",
    "title": "`:focus-within` Focus Container Pseudo-Class",
    "description": "A pseudo-class for matching elements that are either focused or that have focused descendants",
    "specification": "https://www.w3.org/TR/selectors-4/#focus-within-pseudo",
    "stage": 2,
    "browser_support": {
      "and_chr": "60",
      "and_ff": "52",
      "android": "60",
      "chrome": "60",
      "edge": "79",
      "firefox": "52",
      "ios_saf": "10.3",
      "oculus": "5.0",
      "op_mob": "44",
      "opera": "47",
      "safari": "10.1",
      "samsung": "8.0",
      "webview_ios": "10.3"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within"
    },
    "example": "form:focus-within {\n  background: rgb(0 128 0);\n}",
    "interoperable_at": 1579046400,
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/jsxtools/focus-within"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-focus-within"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "font-format-keywords",
    "title": "Font `format()` Keywords",
    "description": "A syntax for specifying font format as a keyword in `@font-face` rule’s `format()` function",
    "specification": "https://www.w3.org/TR/css-fonts-4/#font-format-values",
    "stage": 2,
    "browser_support": {
      "and_chr": "108",
      "android": "108",
      "chrome": "108",
      "edge": "108",
      "ios_saf": "5",
      "op_mob": "73",
      "opera": "94",
      "safari": "4",
      "samsung": "21.0",
      "webview_ios": "5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
    },
    "example": "@font-face {\n  src: url(file.woff2) format(woff2);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/valtlai/postcss-font-format-keywords"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "font-variant-property",
    "title": "`font-variant` Property",
    "description": "A property for defining the usage of alternate glyphs in a font",
    "specification": "https://www.w3.org/TR/css-fonts-3/#propdef-font-variant",
    "stage": 4,
    "browser_support": {
      "and_ff": "34",
      "firefox": "34",
      "ios_saf": "9.3",
      "safari": "9.1",
      "webview_ios": "9.3"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant"
    },
    "example": "h2 {\n  font-variant: small-caps;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-font-variant"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "gamut-mapping",
    "title": "Gamut mapping for CSS color functions",
    "description": "Gamut map css colors to fit display specific gamuts.",
    "specification": "https://www.w3.org/TR/css-color-4/#gamut-mapping",
    "stage": 2,
    "browser_support": {},
    "example": "@media (color-gamut: rec2020) {\n\tp {\n\t\tcolor: oklch(40% 0.234 0.39 / 0.5);\n\t}\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-gamut-mapping"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "gap-properties",
    "title": "Gap Properties",
    "description": "Properties for defining gutters within a layout",
    "specification": "https://www.w3.org/TR/css-grid-1/#gutters",
    "stage": 3,
    "browser_support": {
      "and_chr": "66",
      "and_ff": "61",
      "android": "66",
      "chrome": "66",
      "edge": "16",
      "firefox": "61",
      "ios_saf": "12",
      "oculus": "5.0",
      "op_mob": "47",
      "opera": "53",
      "safari": "12",
      "samsung": "9.0",
      "webview_ios": "12"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap"
    },
    "example": ".grid-1 {\n  gap: 20px;\n}\n\n.grid-2 {\n  column-gap: 40px;\n  row-gap: 20px;\n}",
    "interoperable_at": 1537142400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-gap-properties"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "gradients-interpolation-method",
    "title": "Gradients Interpolation Method",
    "description": "Define the interpolation method for gradients",
    "specification": "https://www.w3.org/TR/css-images-4/#color-interpolation",
    "stage": 2,
    "browser_support": {
      "and_chr": "111",
      "and_ff": "127",
      "android": "111",
      "chrome": "111",
      "edge": "111",
      "firefox": "127",
      "ios_saf": "16.2",
      "op_mob": "75",
      "opera": "97",
      "safari": "16.2",
      "samsung": "22.0",
      "webview_ios": "16.2"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient#syntax"
    },
    "example": ".pie_chart {\n  background-image: conic-gradient(in oklch, yellowgreen 40%, gold 0deg 75%, #f06 0deg);\n}",
    "interoperable_at": 1718064000,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-gradients-interpolation-method"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "grid-layout",
    "title": "Grid Layout",
    "description": "A syntax for using a grid concept to lay out content",
    "specification": "https://www.w3.org/TR/css-grid-1/",
    "stage": 3,
    "browser_support": {
      "and_chr": "57",
      "and_ff": "52",
      "android": "57",
      "chrome": "57",
      "edge": "16",
      "firefox": "52",
      "ios_saf": "10.3",
      "oculus": "5.0",
      "op_mob": "43",
      "opera": "44",
      "safari": "10.1",
      "samsung": "6.0",
      "webview_ios": "10.3"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid"
    },
    "example": "section {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-gap: 10px;\n}",
    "interoperable_at": 1508198400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/autoprefixer"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "has-pseudo-class",
    "title": "`:has()` Relational Pseudo-Class",
    "description": "A pseudo-class for matching ancestor and sibling elements",
    "specification": "https://www.w3.org/TR/selectors-4/#has-pseudo",
    "stage": 2,
    "browser_support": {
      "and_chr": "105",
      "and_ff": "121",
      "android": "105",
      "chrome": "105",
      "edge": "105",
      "firefox": "121",
      "ios_saf": "15.4",
      "op_mob": "72",
      "opera": "91",
      "safari": "15.4",
      "samsung": "20.0",
      "webview_ios": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
    },
    "example": "a:has(> img) {\n  display: block;\n}",
    "interoperable_at": 1702944000,
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-has-pseudo"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-has-pseudo"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "has"
  },
  {
    "id": "hexadecimal-alpha-notation",
    "title": "Hexadecimal Alpha Notation",
    "description": "A 4 & 8 character hex color notation for specifying the opacity level",
    "specification": "https://www.w3.org/TR/css-color-4/#hex-notation",
    "stage": 2,
    "browser_support": {
      "and_chr": "62",
      "and_ff": "49",
      "android": "62",
      "chrome": "62",
      "edge": "79",
      "firefox": "49",
      "ios_saf": "9.3",
      "oculus": "5.0",
      "op_mob": "47",
      "opera": "49",
      "safari": "10",
      "samsung": "8.0",
      "webview_ios": "9.3"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Syntax_2"
    },
    "example": "section {\n  background-color: #f3f3f3f3;\n  color: #0003;\n}",
    "interoperable_at": 1579046400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-hex-alpha"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "hwb-function",
    "title": "`hwb()` Function",
    "description": "A function for specifying colors by hue and then a degree of whiteness and blackness to mix into it",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-hwb",
    "stage": 2,
    "browser_support": {
      "and_chr": "101",
      "and_ff": "96",
      "android": "101",
      "chrome": "101",
      "edge": "101",
      "firefox": "96",
      "ios_saf": "15",
      "oculus": "22.0",
      "op_mob": "70",
      "opera": "87",
      "safari": "15",
      "samsung": "19.0",
      "webview_ios": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb"
    },
    "example": "p {\n  color: hwb(120 44% 50%);\n}",
    "interoperable_at": 1651104000,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-hwb-function"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "ic-unit",
    "title": "`ic` length unit",
    "description": "Equal to the used advance measure of the \"水\" (CJK water ideograph, U+6C34) glyph found in the font used to render it",
    "specification": "https://www.w3.org/TR/css-values-4/#ic",
    "stage": 2,
    "browser_support": {
      "and_chr": "106",
      "and_ff": "97",
      "android": "106",
      "chrome": "106",
      "edge": "106",
      "firefox": "97",
      "ios_saf": "15.4",
      "op_mob": "72",
      "opera": "92",
      "safari": "15.4",
      "samsung": "20.0",
      "webview_ios": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#dimensions"
    },
    "example": "p {\n  text-indent: 2ic;\n}",
    "interoperable_at": 1664755200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-ic-unit"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "ic"
  },
  {
    "id": "image-set-function",
    "title": "`image-set()` Function",
    "description": "A function for specifying image sources based on the user’s resolution",
    "specification": "https://www.w3.org/TR/css-images-4/#image-set-notation",
    "stage": 2,
    "browser_support": {
      "and_chr": "25",
      "and_ff": "89",
      "android": "4.4",
      "chrome": "21",
      "edge": "79",
      "firefox": "89",
      "ios_saf": "14",
      "oculus": "5.0",
      "op_mob": "14",
      "opera": "15",
      "safari": "14",
      "samsung": "1.5",
      "webview_ios": "17"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set"
    },
    "example": "p {\n  background-image: image-set(\n    \"foo.png\" 1x,\n    \"foo-2x.png\" 2x,\n    \"foo-print.png\" 600dpi\n  );\n}",
    "interoperable_at": 1622505600,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-image-set-function"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "in-out-of-range-pseudo-class",
    "title": "`:in-range` and `:out-of-range` Pseudo-Classes",
    "description": "A pseudo-class for matching elements that have range limitations",
    "specification": "https://www.w3.org/TR/selectors-4/#range-pseudos",
    "stage": 2,
    "browser_support": {
      "and_chr": "18",
      "and_ff": "16",
      "android": "2.2",
      "chrome": "10",
      "edge": "13",
      "firefox": "29",
      "ios_saf": "5",
      "oculus": "5.0",
      "op_mob": "11",
      "opera": "11",
      "safari": "5.1",
      "samsung": "1.0",
      "webview_ios": "5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range"
    },
    "example": "input:in-range {\n  background-color: rgb(0 255 0 / 0.25);\n}\ninput:out-of-range {\n  background-color: rgb(255 0 0 / 0.25);\n  border: 2px solid red;\n}",
    "interoperable_at": 1447286400,
    "vendors_implementations": 3
  },
  {
    "id": "is-pseudo-class",
    "title": "`:is()` Matches-Any Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#matches-pseudo",
    "stage": 2,
    "browser_support": {
      "and_chr": "88",
      "and_ff": "82",
      "android": "88",
      "chrome": "88",
      "edge": "88",
      "firefox": "82",
      "ios_saf": "14",
      "oculus": "14.0",
      "op_mob": "63",
      "opera": "74",
      "safari": "14",
      "samsung": "15.0",
      "webview_ios": "14"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is"
    },
    "example": "p:is(:first-child, .special) {\n  margin-top: 1em;\n}",
    "interoperable_at": 1611187200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-is-pseudo-class"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "is"
  },
  {
    "id": "lab-function",
    "title": "`lab()` Function",
    "description": "A function for specifying colors expressed in the CIE Lab color space",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-lab",
    "stage": 2,
    "browser_support": {
      "and_chr": "116",
      "and_ff": "113",
      "android": "116",
      "chrome": "116",
      "edge": "116",
      "firefox": "113",
      "ios_saf": "16.2",
      "op_mob": "78",
      "opera": "102",
      "safari": "16.2",
      "samsung": "24.0",
      "webview_ios": "16.2"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab"
    },
    "example": "body {\n  color: lab(80% 50 20);\n}",
    "interoperable_at": 1692576000,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-lab-function"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "lab"
  },
  {
    "id": "lch-function",
    "title": "`lch()` Function",
    "description": "A function for specifying colors expressed in the CIE Lab color space with chroma and hue",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-lch",
    "stage": 2,
    "browser_support": {
      "and_chr": "116",
      "and_ff": "113",
      "android": "116",
      "chrome": "116",
      "edge": "116",
      "firefox": "113",
      "ios_saf": "16.2",
      "op_mob": "78",
      "opera": "102",
      "safari": "16.2",
      "samsung": "24.0",
      "webview_ios": "16.2"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch"
    },
    "example": "body {\n  color: lch(53% 105 40);\n}",
    "interoperable_at": 1692576000,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-lab-function"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "lab"
  },
  {
    "id": "light-dark-function",
    "title": "`light-dark()` Function",
    "description": "React to the current used `color-scheme` value",
    "specification": "https://drafts.csswg.org/css-color-5/#light-dark",
    "stage": 2,
    "browser_support": {
      "and_chr": "123",
      "and_ff": "120",
      "android": "123",
      "chrome": "123",
      "edge": "123",
      "firefox": "120",
      "ios_saf": "17.5",
      "op_mob": "82",
      "opera": "109",
      "safari": "17.5",
      "samsung": "27.0",
      "webview_ios": "17.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark"
    },
    "example": "body {\n  color: light-dark(cyan, magenta);\n}",
    "interoperable_at": 1715558400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-light-dark-function"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "logical-overflow",
    "title": "Logical Overflow",
    "description": "Flow-relative `overflow` properties",
    "specification": "https://www.w3.org/TR/css-overflow-3/#overflow-control",
    "stage": 2,
    "browser_support": {
      "and_ff": "79",
      "firefox": "69"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-block"
    },
    "example": "div {\n  overflow-block: scroll;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical-overflow"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "logical-overscroll-behavior",
    "title": "Logical Overscroll Behavior",
    "description": "Flow-relative `overscroll-behavior` properties",
    "specification": "https://www.w3.org/TR/css-overscroll-1/#overscroll-behavior-longhands-logical",
    "stage": 2,
    "browser_support": {
      "and_chr": "77",
      "and_ff": "79",
      "android": "77",
      "chrome": "77",
      "edge": "79",
      "firefox": "73",
      "ios_saf": "16",
      "oculus": "7.0",
      "op_mob": "55",
      "opera": "64",
      "safari": "16",
      "samsung": "12.0",
      "webview_ios": "16"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-block"
    },
    "example": "div {\n  overscroll-behavior-block: scroll;\n}",
    "interoperable_at": 1662940800,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical-overscroll-behavior"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "logical-properties-and-values",
    "title": "Logical Properties and Values",
    "description": "Flow-relative (left-to-right or right-to-left) properties and values",
    "specification": "https://www.w3.org/TR/css-logical-1/",
    "stage": 2,
    "browser_support": {
      "and_chr": "89",
      "and_ff": "66",
      "android": "89",
      "chrome": "89",
      "edge": "89",
      "firefox": "66",
      "ios_saf": "15",
      "oculus": "15.0",
      "op_mob": "63",
      "opera": "75",
      "safari": "15",
      "samsung": "15.0",
      "webview_ios": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values"
    },
    "example": "span:first-child {\n  margin-inline-start: 10px;\n}",
    "interoperable_at": 1632096000,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "logical-resize",
    "title": "Logical values in the `resize` property",
    "description": "Flow-relative (block or inline) values in resize",
    "specification": "https://www.w3.org/TR/css-logical-1/",
    "stage": 2,
    "browser_support": {
      "and_chr": "118",
      "and_ff": "63",
      "android": "118",
      "chrome": "118",
      "edge": "118",
      "firefox": "63",
      "op_mob": "79",
      "opera": "104",
      "safari": "16",
      "samsung": "25.0"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/resize"
    },
    "example": "area {\n  resize: inline;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical-resize"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "logical-viewport-units",
    "title": "Logical Viewport Units",
    "description": "Flow-relative (horizontal or vertical) Viewport Units",
    "specification": "https://www.w3.org/TR/css-values-4/#viewport-relative-units",
    "stage": 2,
    "browser_support": {
      "and_chr": "108",
      "and_ff": "101",
      "android": "108",
      "chrome": "108",
      "edge": "108",
      "firefox": "101",
      "ios_saf": "15.4",
      "op_mob": "73",
      "opera": "94",
      "safari": "15.4",
      "samsung": "21.0",
      "webview_ios": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/length#vb"
    },
    "example": "span:first-child {\n  width: 5vi; height: 10vb; \n}",
    "interoperable_at": 1670198400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical-viewport-units"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "viewport-unit-variants"
  },
  {
    "id": "media-queries-aspect-ratio-number-values",
    "title": "Aspect-Ratio number values",
    "description": "Support `<ratio>` values with `<number>` components in `@media`",
    "specification": "https://www.w3.org/TR/css-values-4/#ratio-value",
    "stage": 2,
    "browser_support": {
      "and_chr": "110",
      "and_ff": "79",
      "android": "110",
      "chrome": "110",
      "edge": "110",
      "firefox": "78",
      "ios_saf": "16.4",
      "safari": "16.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/ratio"
    },
    "example": "@media (aspect-ratio: 1.77) {\n  html {\n    background-color: cyan;\n  }\n}",
    "interoperable_at": 1679875200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-media-queries-aspect-ratio-number-values"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "media-query-ranges",
    "title": "Media Query Ranges",
    "description": "A syntax for defining media query ranges using ordinary comparison operators",
    "specification": "https://www.w3.org/TR/mediaqueries-4/#range-context",
    "stage": 3,
    "browser_support": {
      "and_chr": "104",
      "and_ff": "102",
      "android": "104",
      "chrome": "104",
      "edge": "104",
      "firefox": "102",
      "ios_saf": "16.4",
      "oculus": "23.0",
      "op_mob": "71",
      "opera": "90",
      "safari": "16.4",
      "samsung": "20.0",
      "webview_ios": "16.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#Syntax_improvements_in_Level_4"
    },
    "example": "@media (width < 480px) {}\n\n@media (480px <= width < 768px) {}\n\n@media (width >= 768px) {}",
    "interoperable_at": 1679875200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-media-minmax"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "media-query-range-syntax"
  },
  {
    "id": "nested-calc",
    "title": "Nested `calc()`",
    "description": "Nest calc functions with the calc function name",
    "specification": "https://www.w3.org/TR/css-values-4/#calc-func",
    "stage": 2,
    "browser_support": {
      "and_chr": "51",
      "and_ff": "48",
      "android": "51",
      "chrome": "51",
      "edge": "16",
      "firefox": "48",
      "ios_saf": "11",
      "oculus": "5.0",
      "op_mob": "41",
      "opera": "38",
      "safari": "11",
      "samsung": "5.0",
      "webview_ios": "11"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/calc"
    },
    "example": "p {\n  padding: calc(1px + calc(4 / 3));\n}",
    "interoperable_at": 1508198400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nested-calc"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "nesting-rules",
    "title": "Nesting Rules",
    "description": "A syntax for nesting relative rules within rules",
    "specification": "https://www.w3.org/TR/css-nesting-1/",
    "stage": 2,
    "browser_support": {
      "and_chr": "120",
      "and_ff": "117",
      "android": "120",
      "chrome": "120",
      "edge": "120",
      "firefox": "117",
      "ios_saf": "17.2",
      "op_mob": "80",
      "opera": "106",
      "safari": "17.2",
      "samsung": "25.0",
      "webview_ios": "17.2"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector"
    },
    "example": "article {\n  & p {\n    color: #333;\n  }\n}",
    "interoperable_at": 1702252800,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "nesting"
  },
  {
    "id": "not-pseudo-class",
    "title": "`:not()` Negation List Pseudo-Class",
    "description": "A pseudo-class for ignoring elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#negation-pseudo",
    "stage": 2,
    "browser_support": {
      "and_chr": "88",
      "and_ff": "84",
      "android": "88",
      "chrome": "88",
      "edge": "88",
      "firefox": "84",
      "ios_saf": "9",
      "oculus": "14.0",
      "opera": "74",
      "safari": "9",
      "samsung": "15.0",
      "webview_ios": "9"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:not"
    },
    "example": "p:not(:first-child, .special) {\n  margin-top: 1em;\n}",
    "interoperable_at": 1611187200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-selector-not"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "oklab-function",
    "title": "`oklab` and `oklch` color functions",
    "description": "Functions that allow colors to be expressed in OKLab and OKLCH.",
    "specification": "https://www.w3.org/TR/css-color-4/#specifying-oklab-oklch",
    "stage": 2,
    "browser_support": {
      "and_chr": "116",
      "and_ff": "113",
      "android": "116",
      "chrome": "116",
      "edge": "116",
      "firefox": "113",
      "ios_saf": "16.2",
      "op_mob": "78",
      "opera": "102",
      "safari": "16.2",
      "samsung": "24.0",
      "webview_ios": "16.2"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklab"
    },
    "example": "p {\n  color: oklab(72.322% -0.0465 -0.1150);\n  color: oklch(72.322% 0.12403 247.996);\n}",
    "interoperable_at": 1692576000,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-oklab-function"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "oklab"
  },
  {
    "id": "opacity-percentage",
    "title": "Support for percentages for `opacity`",
    "description": "Syntactic sugar to use percentages instead of a float between 0 and 1.",
    "specification": "https://www.w3.org/TR/css-color-4/#transparency",
    "stage": 2,
    "browser_support": {
      "and_chr": "78",
      "and_ff": "79",
      "android": "78",
      "chrome": "78",
      "edge": "79",
      "firefox": "70",
      "ios_saf": "13.4",
      "oculus": "8.0",
      "op_mob": "56",
      "opera": "65",
      "safari": "13.1",
      "samsung": "12.0",
      "webview_ios": "13.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"
    },
    "example": "img {\n  opacity: 90%;\n}",
    "interoperable_at": 1595894400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/mrcgrtz/postcss-opacity-percentage"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "overflow-property",
    "title": "`overflow` Shorthand Property",
    "description": "A property for defining `overflow-x` and `overflow-y`",
    "specification": "https://www.w3.org/TR/css-overflow-3/#propdef-overflow",
    "stage": 2,
    "browser_support": {
      "and_chr": "68",
      "and_ff": "61",
      "android": "68",
      "chrome": "68",
      "edge": "79",
      "firefox": "61",
      "ios_saf": "13.4",
      "oculus": "6.0",
      "op_mob": "48",
      "opera": "55",
      "safari": "13.1",
      "samsung": "10.0",
      "webview_ios": "13.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"
    },
    "example": "html {\n  overflow: hidden auto;\n}",
    "interoperable_at": 1585008000,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-overflow-shorthand"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "overflow-wrap-property",
    "title": "`overflow-wrap` Property",
    "description": "A property for defining whether to insert line breaks within words to prevent overflowing",
    "specification": "https://www.w3.org/TR/css-text-3/#overflow-wrap-property",
    "stage": 2,
    "browser_support": {
      "and_chr": "25",
      "and_ff": "49",
      "android": "4.4",
      "chrome": "23",
      "edge": "18",
      "firefox": "49",
      "ios_saf": "7",
      "oculus": "5.0",
      "op_mob": "12.1",
      "opera": "12.1",
      "safari": "7",
      "samsung": "1.5",
      "webview_ios": "7"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap"
    },
    "example": "p {\n  overflow-wrap: break-word;\n}",
    "interoperable_at": 1538438400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/mattdimu/postcss-replace-overflow-wrap"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "overscroll-behavior-property",
    "title": "`overscroll-behavior` Property",
    "description": "Properties for controlling when the scroll position of a scroll container reaches the edge of a scrollport",
    "specification": "https://www.w3.org/TR/css-overscroll-1/",
    "stage": 2,
    "browser_support": {
      "and_chr": "63",
      "and_ff": "59",
      "android": "63",
      "chrome": "63",
      "edge": "18",
      "firefox": "59",
      "ios_saf": "16",
      "oculus": "5.0",
      "op_mob": "46",
      "opera": "50",
      "safari": "16",
      "samsung": "8.0",
      "webview_ios": "16"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior"
    },
    "example": ".messages {\n  height: 220px;\n  overflow: auto;\n  overscroll-behavior-y: contain;\n}\n\nbody {\n  margin: 0;\n  overscroll-behavior: none;\n}",
    "interoperable_at": 1662940800,
    "vendors_implementations": 3
  },
  {
    "id": "place-properties",
    "title": "Place Properties",
    "description": "Properties for defining alignment within a layout",
    "specification": "https://www.w3.org/TR/css-align-3/#place-items-property",
    "stage": 2,
    "browser_support": {
      "and_chr": "59",
      "and_ff": "53",
      "android": "59",
      "chrome": "59",
      "edge": "79",
      "firefox": "53",
      "ios_saf": "11",
      "oculus": "5.0",
      "op_mob": "43",
      "opera": "46",
      "safari": "11",
      "samsung": "7.0",
      "webview_ios": "11"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/place-content"
    },
    "example": ".example {\n  place-content: flex-end;\n  place-items: center / space-between;\n  place-self: flex-start / center;\n}",
    "interoperable_at": 1579046400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-place"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "prefers-color-scheme-query",
    "title": "`prefers-color-scheme` Media Query",
    "description": "A media query to detect if the user has requested the system use a light or dark color theme",
    "specification": "https://www.w3.org/TR/mediaqueries-5/#prefers-color-scheme",
    "stage": 2,
    "browser_support": {
      "and_chr": "76",
      "and_ff": "67",
      "android": "76",
      "chrome": "76",
      "edge": "79",
      "firefox": "67",
      "ios_saf": "13",
      "oculus": "7.0",
      "op_mob": "54",
      "opera": "62",
      "safari": "12.1",
      "samsung": "14.2",
      "webview_ios": "13"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
    },
    "example": "body {\n  background-color: white;\n  color: black;\n}\n\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: black;\n    color: white;\n  }\n}",
    "interoperable_at": 1579046400,
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "prefers-reduced-motion-query",
    "title": "`prefers-reduced-motion` Media Query",
    "description": "A media query to detect if the user has requested less animation and general motion on the page",
    "specification": "https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion",
    "stage": 2,
    "browser_support": {
      "and_chr": "74",
      "and_ff": "64",
      "android": "74",
      "chrome": "74",
      "edge": "79",
      "firefox": "63",
      "ios_saf": "10.3",
      "oculus": "6.0",
      "op_mob": "53",
      "opera": "62",
      "safari": "10.1",
      "samsung": "11.0",
      "webview_ios": "10.3"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"
    },
    "example": ".animation {\n  animation: vibrate 0.3s linear infinite both; \n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animation {\n    animation: none;\n  }\n}",
    "interoperable_at": 1579046400,
    "vendors_implementations": 3
  },
  {
    "id": "random-function",
    "title": "`random()` function",
    "description": "Represents a random value between a minimum and maximum value, drawn from a uniform distribution, optionally limiting the possible values to a step between those limits",
    "specification": "https://drafts.csswg.org/css-values-5/#random",
    "stage": 2,
    "browser_support": {},
    "docs": {},
    "example": "div {\n  color: oklch(0.7, 0.2, random(120deg, 240deg));\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-random-function"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "read-only-write-pseudo-class",
    "title": "`:read-only` and `:read-write` selectors",
    "description": "Pseudo-classes to match elements which are considered user-alterable",
    "specification": "https://www.w3.org/TR/selectors-4/#rw-pseudos",
    "stage": 2,
    "browser_support": {
      "and_chr": "18",
      "and_ff": "79",
      "android": "37",
      "chrome": "1",
      "edge": "13",
      "firefox": "78",
      "ios_saf": "3.2",
      "oculus": "5.0",
      "op_mob": "10.1",
      "opera": "9",
      "safari": "4",
      "samsung": "1.0",
      "webview_ios": "3.2"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only"
    },
    "example": "input:read-only {\n  background-color: #ccc;\n}",
    "interoperable_at": 1595894400,
    "vendors_implementations": 3,
    "web-feature": "read-write-pseudos"
  },
  {
    "id": "rebeccapurple-color",
    "title": "`rebeccapurple` Color",
    "description": "A particularly lovely shade of purple in memory of Rebecca Alison Meyer",
    "specification": "https://www.w3.org/TR/css-color-4/#valdef-color-rebeccapurple",
    "stage": 2,
    "browser_support": {
      "and_chr": "38",
      "and_ff": "33",
      "android": "38",
      "chrome": "38",
      "edge": "12",
      "firefox": "33",
      "ie": "11",
      "ios_saf": "8",
      "oculus": "5.0",
      "op_mob": "25",
      "opera": "25",
      "safari": "9",
      "samsung": "3.0",
      "webview_ios": "8"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
    },
    "example": "html {\n  color: rebeccapurple;\n}",
    "interoperable_at": 1443571200,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-rebeccapurple"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "relative-color-syntax",
    "title": "Relative Colors",
    "description": "Modify existing colors using color functions",
    "specification": "https://www.w3.org/TR/css-color-5/#relative-colors",
    "stage": 2,
    "browser_support": {
      "and_chr": "125",
      "and_ff": "128",
      "android": "125",
      "chrome": "125",
      "edge": "125",
      "firefox": "128",
      "ios_saf": "18",
      "op_mob": "83",
      "opera": "111",
      "safari": "18",
      "samsung": "27.0",
      "webview_ios": "18"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors"
    },
    "example": "p {\n  color: lch(from peru calc(l * 0.8) c h);\n}",
    "interoperable_at": 1726444800,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-relative-color-syntax"
      }
    ],
    "vendors_implementations": 3,
    "web-feature": "relative-color"
  },
  {
    "id": "scope-pseudo-class",
    "title": "`:scope()` Reference Element Pseudo-class",
    "description": "A pseudo-class for matching one or more scoping roots",
    "specification": "https://www.w3.org/TR/selectors-4/#the-scope-pseudo",
    "stage": 2,
    "browser_support": {
      "and_chr": "27",
      "and_ff": "32",
      "android": "4.4",
      "chrome": "27",
      "edge": "79",
      "firefox": "32",
      "ios_saf": "7",
      "oculus": "5.0",
      "op_mob": "15",
      "opera": "15",
      "safari": "7",
      "samsung": "1.5",
      "webview_ios": "7"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:scope"
    },
    "example": ":scope {\n  background-color: pink;\n}",
    "interoperable_at": 1579046400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-scope-pseudo-class"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "sign-functions",
    "title": "`abs()` and `sign()` functions",
    "description": "The sign-related functions—abs() and sign()—compute various functions related to the sign of their argument",
    "specification": "https://www.w3.org/TR/css-values-4/#sign-funcs",
    "stage": 2,
    "browser_support": {
      "and_ff": "118",
      "firefox": "118",
      "ios_saf": "15.4",
      "safari": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/sign"
    },
    "example": "div {\n  order: abs(-10);\n  order: sign(-10);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-sign-functions"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "src-function",
    "title": "`src()` function",
    "description": "The argument of `src()` can be provided by functions, such as var(). Otherwise this behaves the same as `url()`",
    "specification": "https://www.w3.org/TR/css-values-4/#funcdef-src",
    "stage": 2,
    "browser_support": {},
    "example": "div {\n  background: src('./image.jpg');\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/google/postcss-src"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "stepped-value-functions",
    "title": "`round()`, `mod()` and `rem()` functions",
    "description": "The stepped-value functions, `round()`, `mod()`, and `rem()`, all transform a given value according to another \"step value\", in different ways",
    "specification": "https://www.w3.org/TR/css-values-4/#round-func",
    "stage": 2,
    "browser_support": {
      "and_chr": "125",
      "and_ff": "118",
      "android": "125",
      "chrome": "125",
      "edge": "125",
      "firefox": "118",
      "ios_saf": "15.4",
      "op_mob": "83",
      "opera": "111",
      "safari": "15.4",
      "samsung": "27.0",
      "webview_ios": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/round"
    },
    "example": "div {\n  left: mod(18px, 5px);\n  top: rem(18px, 5px);\n  right: round(2.5px, 1px);\n  bottom: round(up, 15px, 7px);\n}",
    "interoperable_at": 1715904000,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-stepped-value-functions"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "system-ui-font-family",
    "title": "`system-ui` Font Family",
    "description": "A generic font used to match the user’s interface",
    "specification": "https://www.w3.org/TR/css-fonts-4/#system-ui-def",
    "stage": 2,
    "browser_support": {
      "and_chr": "56",
      "and_ff": "92",
      "android": "56",
      "chrome": "56",
      "edge": "79",
      "firefox": "92",
      "ios_saf": "11",
      "oculus": "5.0",
      "op_mob": "43",
      "opera": "43",
      "safari": "11",
      "samsung": "6.0",
      "webview_ios": "11"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#Syntax"
    },
    "example": "body {\n  font-family: system-ui;\n}",
    "interoperable_at": 1630972800,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-font-family-system-ui"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "text-decoration-shorthand",
    "title": "`text-decoration` shorthand",
    "description": "A property for defining `text-decoration-line`, `text-decoration-thickness`, `text-decoration-style` and `text-decoration-color`",
    "specification": "https://www.w3.org/TR/css-text-decor-4/#text-decoration-property",
    "stage": 2,
    "browser_support": {
      "and_chr": "87",
      "and_ff": "79",
      "android": "87",
      "chrome": "87",
      "edge": "87",
      "firefox": "70",
      "oculus": "13.0",
      "op_mob": "62",
      "opera": "73",
      "samsung": "14.0"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration"
    },
    "example": "p {\n  text-decoration: green wavy underline 2px;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-text-decoration-shorthand"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "trigonometric-functions",
    "title": "`sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` and `atan2()` functions",
    "description": "Functions to calculate various basic trigonometric relationships",
    "specification": "https://www.w3.org/TR/css-values-4/#trig-funcs",
    "stage": 2,
    "browser_support": {
      "and_chr": "111",
      "and_ff": "108",
      "android": "111",
      "chrome": "111",
      "edge": "111",
      "firefox": "108",
      "ios_saf": "15.4",
      "op_mob": "75",
      "opera": "97",
      "safari": "15.4",
      "samsung": "22.0",
      "webview_ios": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/sin"
    },
    "example": "body {\n  left: sin(45deg);\n  left: cos(45deg);\n  left: tan(45deg);\n  left: asin(0.5);\n  left: acos(0.5);\n  left: atan(10);\n  left: atan2(-1, 1);\n}",
    "interoperable_at": 1678665600,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-trigonometric-functions"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "unset-value",
    "title": "`unset` Keyword",
    "description": "The unset CSS keyword resets a property to its inherited value if the property naturally inherits from its parent, and to its initial value if not.",
    "specification": "https://www.w3.org/TR/css-cascade-4/#inherit-initial",
    "stage": 3,
    "browser_support": {
      "and_chr": "41",
      "and_ff": "27",
      "android": "41",
      "chrome": "41",
      "edge": "13",
      "firefox": "27",
      "ios_saf": "9.3",
      "oculus": "5.0",
      "op_mob": "28",
      "opera": "28",
      "safari": "9.1",
      "samsung": "4.0",
      "webview_ios": "9.3"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/unset"
    },
    "example": "div {\n  border-color: unset;\n  color: unset;\n}",
    "interoperable_at": 1458518400,
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-unset-value"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "when-else-rules",
    "title": "When/Else Rules",
    "description": "At-rules for specifying media queries and support queries in a single grammar",
    "specification": "https://www.w3.org/TR/2021/WD-css-conditional-5-20211221/",
    "stage": 2,
    "browser_support": {},
    "example": "@when media(width >= 640px) and (supports(display: flex) or supports(display: grid)) {\n  /* A */\n} @else media(pointer: coarse) {\n  /* B */\n} @else {\n  /* C */\n}",
    "vendors_implementations": 0
  },
  {
    "id": "where-pseudo-class",
    "title": "`:where()` Zero-Specificity Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list without contributing specificity",
    "specification": "https://www.w3.org/TR/selectors-4/#where-pseudo",
    "stage": 2,
    "browser_support": {
      "and_chr": "88",
      "and_ff": "82",
      "android": "88",
      "chrome": "88",
      "edge": "88",
      "firefox": "82",
      "ios_saf": "14",
      "oculus": "14.0",
      "op_mob": "63",
      "opera": "74",
      "safari": "14",
      "samsung": "15.0",
      "webview_ios": "14"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:where"
    },
    "example": "a:where(:not(:hover)) {\n  text-decoration: none;\n}",
    "interoperable_at": 1611187200,
    "vendors_implementations": 3,
    "web-feature": "where"
  }
]
