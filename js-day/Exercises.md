## Javascrip Exercises

create a function that receives one parameter and returns only two keys. Title, Description.

```js
const input = {
  title: 'javascript course',
  description: 'basic javascript course',
  hours: 80,
  schedule: {
    module1: 'basic javascript',
    module2: 'javascript in the browser'
  }
};

let result;
// code your function here and equal that function to the result variable

// test your code
console.log(result);

// expected result
// {
//   title: 'javascript course',
//   description: 'basic javascript course'
// }
```

---

Create a function that adds 5 hours to any course with the previous format

```js
const input = {
  title: 'javascript course',
  description: 'basic javascript course',
  hours: 80,
  schedule: {
    module1: 'basic javascript',
    module2: 'javascript in the browser'
  }
};

// code your function here and equal that function to the result variable
const result = (???, ???) => {

}

// test your code
console.log(result);

// foo(input, 8)
// expected result -> 88
// 
```

---

The given input is a string of multiple words with a single space between each of them. Reverse the words in a new sentence


```js
const input = 'George Raymond Richard Martin';

let result;
// code your function here and equal that function to the result variable

console.log(result); // 'Martin Richard Raymond George'
```

---

The given input is a string of multiple words with a single space between each of them. Create a function to abbreviate the name and return the name initials.

Tips: `split`, `map`, `join`

```js
const input = 'George Raymond Richard Martin';

let result;
// code your function here and equal that function to the result variable

console.log(result); // GRRM
```

---

Given an array of course modules filter the courses that has even students

```js
const input = [
  {
    students: 40,
    module: 'python',
  },
  {
    students: 33,
    module: 'git',
  },
  {
    students: 20,
    module: 'js'
  },
  {
    students: 11,
    module: 'agile'
  },
]

// code your filter here

console.log(result)
// this must return
// [
//   {
//     students: 40,
//     module: 'python',
//   },
//   {
//     students: 20,
//     module: 'js'
//   },
// ]
```

---

Create a function with two parameters, first one an object with keys and the second one an array with the keys we want to return.

tips: `reduce`

```js
const input = {
  title: 'javascript course',
  description: 'basic javascript course',
  hours: 80,
  schedule: {
    module1: 'basic javascript',
    module2: 'javascript in the browser'
  }
};

// code your function here and equal that function to the result variable
const result = (???, ???) => {

}

// test your code
console.log(result);

// expected result
// foo(input, ['title', 'hours'])
// {
//   title: 'javascript course',
//   hours: 'basic javascript course'
// }
```
