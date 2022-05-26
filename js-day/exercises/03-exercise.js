const input = 'George Raymond Richard Martin';

let result; // undefined
// code your function here and equal that function to the result variable

// ['hola', 'mundo'].join(' ') -> 'Hola mundo'
// ['hola', 'a', 'todos'].join(' - ')  -> 'Hola - a - todos'

const reverseWords = (str) => { // 'George Raymond Richard Martin'
  const strToArr = str.split(' '); // ['George','Raymond', 'Richard', 'Martin']
  const reverseArr = strToArr.reverse(); // ['Martin', 'Richard','Raymond', 'George']
  const newString = reverseArr.join(' '); // 'Martin Richard Raymond George'
  return newString; // 'Martin Richard Raymond George'
};
// const reverseWordsSimplified = (str) => (
//   str.split(' ').reverse().join(' ')
// )

result = reverseWords(input);

console.log(result); // 'Martin Richard Raymond George'
