// first exercise
const input1 = {
  title: 'javascript course',
  description: 'basic javascript course',
  hours: 80,
  schedule: {
    module1: 'basic javascript',
    module2: 'javascript in the browser',
  },
};
const input2 = {
  title: '.NET course',
  description: 'basic .NET course',
  hours: 80,
  schedule: {
    module1: 'basic .NET',
    module2: '.NET in the browser',
  },
};

// code your function here and equal that function to the result variable
const foo = (inputValue) => {
  return {
    title: inputValue.title,
    description: inputValue.description,
  };
};
// const foo = (inputValue) => (
//   {
//     title: inputValue.title,
//     description: inputValue.description,
//   }
// );

const result1 = foo(input1);
const result2 = foo(input2);

// test your code
console.log(result1);
console.log(result2);

// expected result
// {
//   title: 'javascript course',
//   description: 'basic javascript course'
// }
