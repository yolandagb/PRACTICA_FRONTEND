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
  <!-- Missing this -->
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- ////// -->
  <head>
    <title>Document</title>
  </head>
</html>
```

## Exercise 2

This html is not semantic what could we do to improve it.

```html
<main>
  <section>
    <header>
      <h2>List item</h2>
      <p>List item</p>
      <p>List item</p>
      <p>List item</p>
    </header>
  </section>
  <section>
    <form>
      <label>description</label>
      <input>
    </div>
  </section>
</main>
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
  <link rel="stylesheet" type= "css" href = "main.css" media="all">
  <script type="javascript" src="app.js">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

## Exercise 4

We need to improve this html form markup. This form will call and endpoint `/register` with the right method. We also have to include the correct input type and mark all fields as required.

```html
<form action="/register" method="post">
  <div>
    <label>name</label>
     <input type="reset" value="name">

  </div>
  <div>
    <label>surname</label>
 <input type="text" value="surname">
  </div>
  <div>
    <label>phone</label>
 <input type="text" value="phone">
  </div>
  <div>
    <label>email</label>
 <input type="text" value="email">
  </div>
  <div>
    <label>password</label>
 <input type="text" value="password">
  </div>
 <input type="submit" value="Register">
</form>
```
