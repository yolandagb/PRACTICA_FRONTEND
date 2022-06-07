# html exercises

In this exercises you will have to complete the missing html or remark what should we include. For example:

What is wrong with this HTML?

```html
<customtag>lorem ipsum dolor</customtab>
```

Answer: It is using a key that does not exists.

## Exercise 1

Add what is missing in our html `<head>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
</html>
```

## Exercise 2

This html is not semantic what could we do to improve it.

```html
<div class="main">
  <div class="section">
    <div>
      <div class="list-item">List item</div>
      <div class="list-item">List item</div>
      <div class="list-item">List item</div>
      <div class="list-item">List item</div>
    </div>
  </div>
  <div class="section">
    <div class="form">
      <label>description</label>
      <input type="text">
    </div>
  </div>
</div>
```

## Exercise 3

If we want to include two CSS files like `reset.css`, `main.css`, and one javascript file `app.js`. Where should we include it in this html?

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

## Exercise 4

We need to improve this html form markup. This form will call and endpoint `/register` with the right method. We also have to include the correct input type and mark all fields as required.

```html
<form>
  <div>
    <label>name</label>
    <input>
  </div>
  <div>
    <label>surname</label>
    <input>
  </div>
  <div>
    <label>phone</label>
    <input>
  </div>
  <div>
    <label>email</label>
    <input>
  </div>
  <div>
    <label>password</label>
    <input>
  </div>
  <input value="register">
</form>
```
