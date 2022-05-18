# Day two

## 1. CSS

We did an intro and we were able to complete the styles of our Anime's website.

We saw a lot of concepts:

**CSS variables**

We can reuse variables across our CSS file.

```css
:root {
  --main-primary-color: #4C4AE6;
  --main-font: 'Raleway', sans-serif;
}

body {
  font-family: var(--main-font);
}
```

**Selector**

```css
/* 
  we can use selectors for tags. But is not recommendable. It is too generic
*/
div {
  color : red;
}
/*
  We can use selectors with classes
  <div class="my-div">
*/
.my-div {
  font-size: 2rem;
}
/*
  We can use selectors with multiple classes
  <div class="my-div main-color">
*/
.main-color {
  background-color: blue;
}
.my-div {
  font-size: 2rem;
}
.main-color.my-div {
  padding: 20px;
}
```

**Basic properties (color / padding / margin / font sizes)**

```css
/* <footer class="footer" /> */
.footer {
  font-style: italic;
  text-align: center;
  background-color: var(--main-primary-color);
  color: var(--main-white-color);
	/* margin, padding, border */
	/* border: 2px solid red; */
	padding-top: 30px;
	padding-bottom: 30px;
	/* atajo 1 */
	padding: var(--footer-padding);
	/* atajo 2 */
	padding: 30px 0;
	/* ---------- */
	margin-top: 20px;
	margin: 20px 0 0 0;
}
```

**Common max-width alignment**

We use this css to align the content to the center and limit the width in case we have big screens

```css
.main-content {
	width: 90%;
	margin: 10px auto;
	max-width: 920px;
}
```

**Hover**

```css
.summary:hover {
  background-color: rgb(32, 32, 32);
}
```

**transitions**

For transitions we are going to use this syntax `transition: <css-prop> <time> <type>`.

```css
.summary {
	width: 10px;
	transition: all .3s linear;
}

.summary:hover {
  background-color: rgb(32, 32, 32);
}
```

**display flex**

```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}
```

**display grid**

```css
.shows-container .show-items {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1em;
	/* solucion con flexbox */
	/* display: flex;
	flex-wrap: wrap; */
	/* justify-content: space-between; */
}
```

**media queries**

Remember if we use `(min-width: 760px)` means we will execute extra CSS for screen with 760px and bigger.

```css
@media (min-width: 768px) {
	.content {
		display: flex;
		justify-content: space-between;
	}
}
```

The class example is in this [file](https://github.com/KeepCoding-FAM-Expleo-2022/curso-frontend/blob/main/css-day/main.css).

---

**External resources**

- [CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).
- [Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
- [CSS grid guide](https://css-tricks.com/snippets/css/complete-guide-grid/).
- [Google fonts](https://fonts.google.com/).
- [CSS grid garden](https://cssgridgarden.com/).
- [CSS flexbox froggy](https://flexboxfroggy.com/).
- [Reset Meyerweb](https://meyerweb.com/eric/tools/css/reset/).
- [CSS animations](https://www.w3schools.com/css/css3_animations.asp)
- [transition curve generator](https://matthewlein.com/tools/ceaser)
- [CSS animation example](https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation3)
- [MDN transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
