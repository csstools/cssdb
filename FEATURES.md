# CSS Database

CSS Database is a comprehensive list of CSS features and their positions in the process of becoming implemented web standards.

---

### <img src="https://jonathantneal.github.io/css-db/stage-2.svg" alt="Stage 2" width="62" height="62" align="right"> Color `#RRGGBBAA` Notation

> A 4 & 8 character hex notation for color to include the opacity level

[Specification](https://drafts.csswg.org/css-color/#hex-notation)

```css
background-color: #f3f3f3f3;
color: #0003;
```

###### Polyfills

- [PostCSS Plugin](https://github.com/postcss/postcss-color-hex-alpha)

---

### <img src="https://jonathantneal.github.io/css-db/stage-2.svg" alt="Stage 2" width="62" height="62" align="right"> Color `color-mod()` Function

> A function used to modify a color

[Specification](https://drafts.csswg.org/css-color/#modifying-colors)

```css
color: color-mod(black alpha(50%));
```

###### Polyfills

- [PostCSS Plugin](https://github.com/postcss/postcss-color-function)

---

### <img src="https://jonathantneal.github.io/css-db/stage-2.svg" alt="Stage 2" width="62" height="62" align="right"> Color `gray()` Function

> A function used to specify fully desaturate colors

[Specification](https://drafts.csswg.org/css-color/#grays)

```css
color: gray(red);
```

###### Polyfills

- [PostCSS Plugin](https://github.com/postcss/postcss-color-gray)

---

### <img src="https://jonathantneal.github.io/css-db/stage-2.svg" alt="Stage 2" width="62" height="62" align="right"> Color `hwb()` Function

> A function used to specify colors, similar to HSL, but often even easier for humans to work with

[Specification](https://drafts.csswg.org/css-color/#the-hwb-notation)

```css
color: hwb(120deg, 44%, 50%);
```

###### Polyfills

- [PostCSS Plugin](https://github.com/postcss/postcss-color-hwb)

---

### <img src="https://jonathantneal.github.io/css-db/stage-5.svg" alt="Stage 5" width="62" height="62" align="right"> Custom Properties

> A syntax for defining custom values accepted by all CSS properties

[Specification](https://drafts.csswg.org/css-variables/)

```css
--some-length: 32px;

height: var(--some-length);
width: var(--some-length);
```

###### Polyfills

- [PostCSS Plugin](https://github.com/postcss/postcss-custom-properties)

---

### <img src="https://jonathantneal.github.io/css-db/stage-X.svg" alt="Rejected" width="62" height="62" align="right"> Custom Property Sets

> A syntax for storing properties in a named variable, referenceable in other style rules

[Specification](https://tabatkins.github.io/specs/css-apply-rule/)

```css
--some-length-styles: {
  height: 32px;
  width: 32px; 
};

@apply --some-length-styles;
```

###### Polyfills

- [PostCSS Plugin](https://github.com/pascalduez/postcss-apply)

---

### <img src="https://jonathantneal.github.io/css-db/stage-2.svg" alt="Stage 2" width="62" height="62" align="right"> Custom Selectors

> An at-rule used to define aliases representing selectors

[Specification](https://drafts.csswg.org/css-extensions/#custom-selectors)

```css
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

article :--heading + p { margin-top: 0; }
```

###### Polyfills

- [PostCSS Plugin](https://github.com/postcss/postcss-custom-selectors)

---

### <img src="https://jonathantneal.github.io/css-db/stage-0.svg" alt="Stage 0" width="62" height="62" align="right"> Element Queries

> A syntax for container-style element queries

[Specification](https://tomhodgins.github.io/element-queries-spec/element-queries.html)

```css
@element html and (min-width: 500px) {
  body {
    background: lime;
  }
}
```

###### Polyfills

- [JS Library](https://github.com/eqcss/eqcss)

---

### <img src="https://jonathantneal.github.io/css-db/stage-4.svg" alt="Stage 4" width="62" height="62" align="right"> Grid Layout

> A syntax for using a grid concept to lay out content

[Specification](https://drafts.csswg.org/css-grid-2/)

```css
display: grid;
grid-template-columns: 100px 100px 100px;
grid-gap: 10px;
```

---

### <img src="https://jonathantneal.github.io/css-db/stage-3.svg" alt="Stage 3" width="62" height="62" align="right"> Logical Properties and Values

> Flow-relative (LTR or RTL) properties and values

[Specification](https://drafts.csswg.org/css-logical/)

```css
float: inline-start;
margin-inline-start: 10px;
```

###### Polyfills

- [PostCSS Plugin](https://github.com/jonathantneal/postcss-logical-properties)

---

### <img src="https://jonathantneal.github.io/css-db/stage-2.svg" alt="Stage 2" width="62" height="62" align="right"> Media Queries Custom Media Queries

> An at-rule used to define aliases representing media queries

[Specification](https://drafts.csswg.org/mediaqueries-5/#custom-mq)

```css
float: inline-start;
margin-inline-start: 10px;
```

###### Polyfills

- [PostCSS Plugin](https://github.com/postcss/postcss-custom-media)

---

### <img src="https://jonathantneal.github.io/css-db/stage-3.svg" alt="Stage 3" width="62" height="62" align="right"> Media Queries Ranges

> A syntax for defining media query ranges using ordinary mathematical comparison operators

[Specification](https://drafts.csswg.org/mediaqueries/#mq-ranges)

```css
@custom-media --small-viewport (max-width: 30em);
@media (--small-viewport) {}
```

###### Polyfills

- [PostCSS Plugin](https://github.com/postcss/postcss-media-minmax)

---

### <img src="https://jonathantneal.github.io/css-db/stage-0.svg" alt="Stage 0" width="62" height="62" align="right"> Media Queries `media()` Function

> A function used to define media queries within values

[Specification](https://jonathantneal.github.io/media-expressions-spec/)

```css
font-size: media(
  16px,
  (min-width:  600px) 20px,
  (min-width: 1000px) 40px,
  (min-width: 1400px) 60px
);
```

###### Polyfills

- [PostCSS Plugin](https://github.com/jonathantneal/postcss-media-fn)

---

### <img src="https://jonathantneal.github.io/css-db/stage-1.svg" alt="Stage 1" width="62" height="62" align="right"> Nesting

> A syntax for nesting relative rules inside another

[Specification](https://tabatkins.github.io/specs/css-nesting/)

```css
article {
  p {
    color: #333;
  }
}
```

###### Polyfills

- [PostCSS Plugin](https://github.com/jonathantneal/postcss-nesting)

---

### <img src="https://jonathantneal.github.io/css-db/stage-3.svg" alt="Stage 3" width="62" height="62" align="right"> Selectors `:matches()` Matches-Any Pseudo-class

> A pseudo-class used to match a selector list

[Specification](https://drafts.csswg.org/selectors-4/#matches)

```css
p:matches(:first-child, .special) {}
```

###### Polyfills

- [PostCSS Plugin](https://github.com/postcss/postcss-selector-matches)

---

### <img src="https://jonathantneal.github.io/css-db/stage-3.svg" alt="Stage 3" width="62" height="62" align="right"> Selectors `:not()` Negation Pseudo-Class

> A pseudo-class used to ignore a selector list

[Specification](https://drafts.csswg.org/selectors-4/#negation)

```css
p:not(:first-child, .special) {}
```

###### Polyfills

- [PostCSS Plugin](https://github.com/postcss/postcss-selector-not)

---

### <img src="https://jonathantneal.github.io/css-db/stage-0.svg" alt="Stage 0" width="62" height="62" align="right"> Sizing `aspect-ratio` Property

> A property for defining the aspect ratio of an element

[Specification](https://tomhodgins.github.io/aspect-ratio-spec/aspect-ratio.html)

```css
div {
  aspect-ratio: 16/9;
  width: 200px;
}
```

###### Polyfills

- [JS Library](https://github.com/tomhodgins/aspect-ratio-spec)


