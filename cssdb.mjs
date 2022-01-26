export default [
  {
    "id": "all-property",
    "title": "`all` Property",
    "description": "A property for defining the reset of all properties of an element",
    "specification": "https://www.w3.org/TR/css-cascade-3/#all-shorthand",
    "stage": 4,
    "browser_support": {
      "edge": "79",
      "firefox": "27",
      "chrome": "37",
      "safari": "10",
      "opera": "24",
      "ios_saf": "9.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "and_uc": "12.12",
      "samsung": "4",
      "and_qq": "10.4",
      "baidu": "7.12",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/all"
    },
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
      "chrome": "1",
      "and_chr": "18",
      "edge": "79",
      "firefox": "1",
      "and_ff": "4",
      "opera": "15",
      "op_mob": "14",
      "safari": "3",
      "ios_saf": "1",
      "samsung": "1.0",
      "android": "65"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link"
    },
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
      "ie": "10",
      "edge": "12",
      "safari": "10",
      "opera": "12",
      "ios_saf": "10",
      "op_mini": "all",
      "op_mob": "12",
      "ie_mob": "10",
      "and_uc": "12.12",
      "samsung": "5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-after"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/shrpne/postcss-page-break"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "case-insensitive-attributes",
    "title": "Case-Insensitive Attributes",
    "description": "An attribute selector matching attribute values case-insensitively",
    "specification": "https://www.w3.org/TR/selectors-4/#attribute-case",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "47",
      "chrome": "49",
      "safari": "9",
      "opera": "36",
      "ios_saf": "9",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "and_uc": "12.12",
      "samsung": "5",
      "and_qq": "10.4",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/Semigradsky/postcss-attribute-case-insensitive"
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
      "chrome": "79",
      "and_chr": "79",
      "edge": "79",
      "firefox": "75",
      "and_ff": "79",
      "opera": "66",
      "op_mob": "57",
      "safari": "13.1",
      "ios_saf": "13.4",
      "samsung": "12.0",
      "android": "79"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()"
    },
    "vendors_implementations": 3
  },
  {
    "id": "color-adjust",
    "title": "`color-adjust` Property",
    "description": "The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images",
    "specification": "https://www.w3.org/TR/css-color-4/#color-adjust",
    "stage": 2,
    "browser_support": {
      "firefox": "48",
      "and_ff": "95",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color-adjust"
    },
    "vendors_implementations": 1
  },
  {
    "id": "color-contrast",
    "title": "`color-contrast()` Function",
    "description": "A function for choosing the color that contrasts the most.",
    "specification": "https://www.w3.org/TR/css-color-5/#colorcontrast",
    "stage": 2,
    "browser_support": {
      "safari": "15",
      "ios_saf": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast()"
    },
    "polyfills": [],
    "vendors_implementations": 1
  },
  {
    "id": "color-functional-notation",
    "title": "Color Functional Notation",
    "description": "A space and slash separated notation for specifying colors",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-rgb",
    "stage": 2,
    "browser_support": {
      "chrome": "65",
      "and_chr": "65",
      "edge": "79",
      "firefox": "52",
      "and_ff": "52",
      "opera": "52",
      "op_mob": "47",
      "safari": "12.1",
      "ios_saf": "12.2",
      "samsung": "9.0",
      "android": "65"
    },
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
    "specification": "https://drafts.csswg.org/css-color-5/#color-mix",
    "stage": -1,
    "browser_support": {},
    "polyfills": [],
    "vendors_implementations": 0
  },
  {
    "id": "color-mod-function",
    "title": "`color-mod()` Function",
    "description": "A function for modifying colors",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-color-mod",
    "stage": -1,
    "browser_support": {},
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-color-mod-function"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "container-queries",
    "title": "Container Queries",
    "description": "New container property and container at rule to make changes depending on the container's size",
    "specification": "https://www.w3.org/TR/css-contain-3/#container-queries",
    "stage": 0,
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/jsxtools/cqfill"
      },
      {
        "type": "JavaScript Library",
        "link": "https://www.npmjs.com/package/container-query-polyfill"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "custom-media-queries",
    "title": "Custom Media Queries",
    "description": "An at-rule for defining aliases that represent media queries",
    "specification": "https://www.w3.org/TR/mediaqueries-5/#at-ruledef-custom-media",
    "stage": 2,
    "browser_support": {},
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-custom-media"
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
      "edge": "16",
      "firefox": "31",
      "chrome": "49",
      "safari": "10",
      "opera": "36",
      "ios_saf": "10",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "and_uc": "12.12",
      "samsung": "5",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/var"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-properties"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "custom-property-sets",
    "title": "Custom Property Sets",
    "description": "A syntax for storing properties in named variables, referenceable in other style rules",
    "specification": "https://tabatkins.github.io/specs/css-apply-rule/",
    "stage": -1,
    "browser_support": {},
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/pascalduez/postcss-apply"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "custom-selectors",
    "title": "Custom Selectors",
    "description": "An at-rule for defining aliases that represent selectors",
    "specification": "https://drafts.csswg.org/css-extensions/#custom-selectors",
    "stage": 1,
    "browser_support": {},
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-custom-selectors"
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
      "firefox": "49",
      "and_ff": "49"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:dir"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-dir-pseudo-class"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "display-two-values",
    "title": "Two values syntax for `display`",
    "description": "Syntax that allows definition of outer and inner displays types for an element",
    "specification": "https://www.w3.org/TR/css-display-3/#the-display-properties",
    "stage": 2,
    "browser_support": {
      "firefox": "70"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/display/two-value_syntax_of_display"
    },
    "vendors_implementations": 1
  },
  {
    "id": "double-position-gradients",
    "title": "Double Position Gradients",
    "description": "A syntax for using two positions in a gradient.",
    "specification": "https://www.w3.org/TR/css-images-4/#color-stop-syntax",
    "stage": 2,
    "browser_support": {
      "chrome": "72",
      "and_chr": "72",
      "edge": "79",
      "firefox": "83",
      "and_ff": "83",
      "opera": "60",
      "op_mob": "51",
      "safari": "12.1",
      "ios_saf": "12.2",
      "samsung": "11.0",
      "android": "72"
    },
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
    "browser_support": {
      "edge": "79",
      "firefox": "65",
      "chrome": "69",
      "safari": "12",
      "opera": "56",
      "ios_saf": "11.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "samsung": "10.1"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/env"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-env-function"
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
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-font-family-fangsong"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "focus-visible-pseudo-class",
    "title": "`:focus-visible` Focus-Indicated Pseudo-Class",
    "description": "A pseudo-class for matching focused elements that indicate that focus to a user",
    "specification": "https://www.w3.org/TR/selectors-4/#focus-visible-pseudo",
    "stage": 2,
    "browser_support": {
      "chrome": "67",
      "and_chr": "67",
      "edge": "79",
      "firefox": "85",
      "and_ff": "85",
      "opera": "54",
      "op_mob": "48",
      "samsung": "14.0",
      "android": "86"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"
    },
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
    "vendors_implementations": 2
  },
  {
    "id": "focus-within-pseudo-class",
    "title": "`:focus-within` Focus Container Pseudo-Class",
    "description": "A pseudo-class for matching elements that are either focused or that have focused descendants",
    "specification": "https://www.w3.org/TR/selectors-4/#focus-within-pseudo",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "52",
      "chrome": "60",
      "safari": "11",
      "opera": "47",
      "ios_saf": "10.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "samsung": "8.2",
      "and_qq": "10.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within"
    },
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
    "stage": 1,
    "browser_support": {
      "safari": "4",
      "ios_saf": "5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/valtlai/postcss-font-format-keywords"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "font-variant-property",
    "title": "`font-variant` Property",
    "description": "A property for defining the usage of alternate glyphs in a font",
    "specification": "https://www.w3.org/TR/css-fonts-3/#propdef-font-variant",
    "stage": 4,
    "browser_support": {
      "firefox": "34",
      "safari": "10",
      "ios_saf": "9.3",
      "and_ff": "95",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-font-variant"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "gap-properties",
    "title": "Gap Properties",
    "description": "Properties for defining gutters within a layout",
    "specification": "https://www.w3.org/TR/css-grid-1/#gutters",
    "stage": 3,
    "browser_support": {
      "chrome": "66",
      "and_chr": "66",
      "edge": "16",
      "firefox": "61",
      "and_ff": "61",
      "opera": "53",
      "op_mob": "47",
      "safari": "12",
      "ios_saf": "12",
      "samsung": "9.0",
      "android": "66"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-gap-properties"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "gray-function",
    "title": "`gray()` Function",
    "description": "A function for specifying fully desaturated colors",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-gray",
    "stage": -1,
    "browser_support": {},
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-color-gray"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "grid-layout",
    "title": "Grid Layout",
    "description": "A syntax for using a grid concept to lay out content",
    "specification": "https://www.w3.org/TR/css-grid-1/",
    "stage": 3,
    "browser_support": {
      "edge": "16",
      "firefox": "54",
      "chrome": "58",
      "safari": "11",
      "opera": "44",
      "ios_saf": "10.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "and_uc": "12.12",
      "samsung": "6.2",
      "and_qq": "10.4",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid"
    },
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
      "safari": "TP"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
    },
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
    "vendors_implementations": 0
  },
  {
    "id": "hexadecimal-alpha-notation",
    "title": "Hexadecimal Alpha Notation",
    "description": "A 4 & 8 character hex color notation for specifying the opacity level",
    "specification": "https://www.w3.org/TR/css-color-4/#hex-notation",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "49",
      "chrome": "62",
      "safari": "10",
      "opera": "52",
      "ios_saf": "10",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "samsung": "8.2"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Syntax_2"
    },
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
      "firefox": "96",
      "and_ff": "96",
      "safari": "15",
      "ios_saf": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb()"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-color-hwb"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "ic-unit",
    "title": "`ic` length unit",
    "description": "Equal to the used advance measure of the \"水\" (CJK water ideograph, U+6C34) glyph found in the font used to render it",
    "specification": "https://www.w3.org/TR/css-values-4/#ic",
    "stage": 2,
    "browser_support": {
      "firefox": "97",
      "and_ff": "97"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#dimensions"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-ic-unit"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "image-set-function",
    "title": "`image-set()` Function",
    "description": "A function for specifying image sources based on the user’s resolution",
    "specification": "https://www.w3.org/TR/css-images-4/#image-set-notation",
    "stage": 2,
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/image-set"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-image-set-function"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "in-out-of-range-pseudo-class",
    "title": "`:in-range` and `:out-of-range` Pseudo-Classes",
    "description": "A pseudo-class for matching elements that have range limitations",
    "specification": "https://www.w3.org/TR/selectors-4/#range-pseudos",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "50",
      "chrome": "53",
      "safari": "11",
      "opera": "40",
      "ios_saf": "10.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "and_uc": "12.12",
      "samsung": "5",
      "and_qq": "10.4",
      "baidu": "7.12"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range"
    },
    "vendors_implementations": 3
  },
  {
    "id": "is-pseudo-class",
    "title": "`:is()` Matches-Any Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#matches-pseudo",
    "stage": 2,
    "browser_support": {
      "edge": "88",
      "firefox": "78",
      "chrome": "88",
      "safari": "14",
      "opera": "75",
      "ios_saf": "14",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "samsung": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is"
    },
    "vendors_implementations": 3
  },
  {
    "id": "lab-function",
    "title": "`lab()` Function",
    "description": "A function for specifying colors expressed in the CIE Lab color space",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-lab",
    "stage": 2,
    "browser_support": {
      "safari": "15",
      "ios_saf": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab()"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-lab-function"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "lch-function",
    "title": "`lch()` Function",
    "description": "A function for specifying colors expressed in the CIE Lab color space with chroma and hue",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-lch",
    "stage": 2,
    "browser_support": {
      "safari": "15",
      "ios_saf": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch()"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-lab-function"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "logical-properties-and-values",
    "title": "Logical Properties and Values",
    "description": "Flow-relative (left-to-right or right-to-left) properties and values",
    "specification": "https://www.w3.org/TR/css-logical-1/",
    "stage": 2,
    "browser_support": {
      "edge": "89",
      "firefox": "66",
      "chrome": "89",
      "safari": "15",
      "opera": "76",
      "ios_saf": "15",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "samsung": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "matches-pseudo-class",
    "title": "`:matches()` Matches-Any Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#selectordef-matches",
    "stage": -1,
    "browser_support": {
      "edge": "88",
      "firefox": "78",
      "chrome": "88",
      "safari": "14",
      "opera": "75",
      "ios_saf": "14",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "samsung": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-selector-matches"
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
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax_improvements_in_Level_4"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-media-minmax"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "nesting-rules",
    "title": "Nesting Rules",
    "description": "A syntax for nesting relative rules within rules",
    "specification": "https://www.w3.org/TR/css-nesting-1/",
    "stage": 1,
    "browser_support": {},
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "not-pseudo-class",
    "title": "`:not()` Negation List Pseudo-Class",
    "description": "A pseudo-class for ignoring elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#negation-pseudo",
    "stage": 2,
    "browser_support": {
      "edge": "88",
      "firefox": "84",
      "chrome": "88",
      "safari": "9",
      "opera": "75",
      "ios_saf": "9",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "samsung": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:not"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-selector-not"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "opacity-percentage",
    "title": "Support for percentages for `opacity`",
    "description": "Syntactic sugar to use percentages instead of a float between 0 and 1.",
    "specification": "https://www.w3.org/TR/css-color-4/#transparency",
    "stage": 2,
    "browser_support": {
      "chrome": "78",
      "and_chr": "78",
      "edge": "79",
      "firefox": "70",
      "samsung": "12.0",
      "android": "78"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"
    },
    "vendors_implementations": 2
  },
  {
    "id": "overflow-property",
    "title": "`overflow` Shorthand Property",
    "description": "A property for defining `overflow-x` and `overflow-y`",
    "specification": "https://www.w3.org/TR/css-overflow-3/#propdef-overflow",
    "stage": 2,
    "browser_support": {
      "chrome": "68",
      "and_chr": "68",
      "edge": "79",
      "firefox": "61",
      "and_ff": "61",
      "opera": "55",
      "op_mob": "48",
      "samsung": "10.0",
      "android": "68"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-overflow-shorthand"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "overflow-wrap-property",
    "title": "`overflow-wrap` Property",
    "description": "A property for defining whether to insert line breaks within words to prevent overflowing",
    "specification": "https://www.w3.org/TR/css-text-3/#overflow-wrap-property",
    "stage": 2,
    "browser_support": {
      "edge": "18",
      "firefox": "49",
      "chrome": "23",
      "safari": "7",
      "opera": "15",
      "ios_saf": "8",
      "android": "97",
      "bb": "10",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "and_uc": "12.12",
      "samsung": "4",
      "and_qq": "10.4",
      "baidu": "7.12"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap"
    },
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
    "stage": 1,
    "browser_support": {
      "edge": "79",
      "firefox": "59",
      "chrome": "65",
      "opera": "52",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "samsung": "8.2",
      "and_qq": "10.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior"
    },
    "vendors_implementations": 2
  },
  {
    "id": "place-properties",
    "title": "Place Properties",
    "description": "Properties for defining alignment within a layout",
    "specification": "https://www.w3.org/TR/css-align-3/#place-items-property",
    "stage": 2,
    "browser_support": {
      "chrome": "59",
      "and_chr": "59",
      "edge": "79",
      "firefox": "53",
      "and_ff": "53",
      "opera": "46",
      "op_mob": "43",
      "safari": "11",
      "ios_saf": "11",
      "samsung": "7.0",
      "android": "59"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/place-content"
    },
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
      "edge": "79",
      "firefox": "67",
      "chrome": "76",
      "safari": "13",
      "opera": "62",
      "ios_saf": "13",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "samsung": "12"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
    },
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
      "edge": "79",
      "firefox": "63",
      "chrome": "74",
      "safari": "11",
      "opera": "64",
      "ios_saf": "10.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "samsung": "11.1"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"
    },
    "vendors_implementations": 3
  },
  {
    "id": "read-only-write-pseudo-class",
    "title": "`:read-only` and `:read-write` selectors",
    "description": "Pseudo-classes to match elements which are considered user-alterable",
    "specification": "https://www.w3.org/TR/selectors-4/#rw-pseudos",
    "stage": 2,
    "browser_support": {
      "edge": "13",
      "firefox": "78",
      "chrome": "36",
      "safari": "9",
      "opera": "23",
      "ios_saf": "9",
      "android": "97",
      "bb": "10",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "and_uc": "12.12",
      "samsung": "4",
      "and_qq": "10.4",
      "baidu": "7.12"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only"
    },
    "vendors_implementations": 3
  },
  {
    "id": "rebeccapurple-color",
    "title": "`rebeccapurple` Color",
    "description": "A particularly lovely shade of purple in memory of Rebecca Alison Meyer",
    "specification": "https://www.w3.org/TR/css-color-4/#valdef-color-rebeccapurple",
    "stage": 2,
    "browser_support": {
      "edge": "12",
      "firefox": "33",
      "chrome": "38",
      "safari": "7",
      "opera": "25",
      "ios_saf": "8",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "and_uc": "12.12",
      "samsung": "4",
      "and_qq": "10.4",
      "baidu": "7.12",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-rebeccapurple"
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
      "edge": "79",
      "firefox": "92",
      "chrome": "56",
      "safari": "11",
      "opera": "43",
      "ios_saf": "11",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "95",
      "and_uc": "12.12",
      "samsung": "6.2",
      "and_qq": "10.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#Syntax"
    },
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-font-family-system-ui"
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
    "vendors_implementations": 0
  },
  {
    "id": "where-pseudo-class",
    "title": "`:where()` Zero-Specificity Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list without contributing specificity",
    "specification": "https://www.w3.org/TR/selectors-4/#where-pseudo",
    "stage": 2,
    "browser_support": {
      "chrome": "88",
      "and_chr": "88",
      "edge": "88",
      "firefox": "82",
      "and_ff": "82",
      "opera": "74",
      "op_mob": "63",
      "samsung": "15.0",
      "android": "88"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:where"
    },
    "vendors_implementations": 2
  }
]
