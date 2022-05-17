# HTML

## 1. Introduction to web development

We did an introduction to web development. See [Slides](https://github.com/KeepCoding-FAM-Expleo-2022/curso-frontend/tree/main/html-day/html.pdf).

**External resources**

- [How the web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Frontend development](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer)
- [CanIUse](https://caniuse.com/)
- [Emmet]()

## 2. Basic HTML

We learn how to use HTML, basic tags, attributes and links. In this [file](https://github.com/KeepCoding-FAM-Expleo-2022/curso-frontend/blob/main/html-day/basic-tags/index.html) you can see the basic concepts we saw in the class.

- [Getting started HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [HTML tutorial](https://www.w3schools.com/html/)
- [HTML introduction](https://www.w3schools.com/html/html_intro.asp)

## 3. Semantic HTML

We learn a few semantic tags. In this [file](https://github.com/KeepCoding-FAM-Expleo-2022/curso-frontend/blob/main/html-day/basic-tags/index.html) you can see the code we saw in the class.

- [Semantic html](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [Semantic html mdn docs](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

## 4. HTML Forms

We learn a how html forms and their validation works. In this [file](https://github.com/KeepCoding-FAM-Expleo-2022/curso-frontend/blob/main/html-day/basic-tags/index.html) you can see the code we saw in the class.

- [Client side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Form w3school](https://www.w3schools.com/html/html_forms.asp)
- [Input attributes](https://www.w3schools.com/html/html_form_attributes.asp)
- [From attributes](https://www.w3schools.com/html/html_forms_attributes.asp)

## 5. Responsive design & responsive images

We saw the different layout systems, and how having different resolutions or devices has affected the software development:

- [Responsive design patterns](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns)

We also practice how to use responsive images with `<picture>` and `srcset`. We use picture for art direction, in case we want to display different images for different resolutions.

```html
<picture>
  <!-- image 1 -->
  <source
    media="(min-width: 800px)"
    srcset="
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head.jpg,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-2x.jpg 2x
    "
  >
  <!-- image 2 -->
  <source
    media="(min-width: 450px)"
    srcset="
      https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-small.jpg,
      https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-small-2x.jpg 2x
    "
  >
  <!-- image 3 -->
  <img
    src="https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-fb.jpg"
    srcset="
      https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-fb-2x.jpg 2x
    "
    alt="a head carved out of wood"
  >
</picture>
```

When we use `srcset` we define when we want to display an image based on the pixel density of the device.

```html
<img
  src="https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/400.png" 
  sizes="(min-width: 600px) 25vw, (min-width: 500px) 50vw, 100vw"
  srcset="
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/100.png 100w,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/200.png 200w,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/400.png 400w,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/800.png 800w,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/1600.png 1600w,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/2000.png 2000w
  "
  alt="an example image"
>
```

The class example is in this [file](https://github.com/KeepCoding-FAM-Expleo-2022/curso-frontend/blob/main/html-day/basic-tags/index.html).

**External resources**

- [Responsive images](https://github.com/KeepCoding-FAM-Expleo-2022/curso-frontend/blob/main/html-day/basic-tags/index.html).

## 6. Open graph tags

We review Open Graph protocol which based on [their website](https://ogp.me/) is
```
The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.
```

Example of Open graph tags:

```html
<meta property="og:title" content="OG title">
<meta property="og:description" content="OG description etc etc etc">
<meta property="og:image" content="https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-fb-2x.jpg">
<meta property="og:image:width" content="400">
<meta property="og:image:height" content="400">
```

We remark that for assets (images/videos) it is important to use the absolute URL with the domain.

The class example is in this [file](https://github.com/KeepCoding-FAM-Expleo-2022/curso-frontend/blob/main/html-day/basic-tags/index.html).

**External resources**

- [Open graph](https://ogp.me/)
- [List of useful meta tags](https://gist.github.com/lancejpollard/1978404)
- [Twitter cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup)
- [Twitter cards validator](https://cards-dev.twitter.com/validator)
