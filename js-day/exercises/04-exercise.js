const input = 'George Raymond Richard Martin';

let result; // undefined
// code your function here and equal that function to the result variable

// ['hola', 'mundo'].join(' ') -> 'Hola mundo'
// ['hola', 'a', 'todos'].join(' - ')  -> 'Hola - a - todos'

const getInitials = (str) => { // 'George Raymond Richard Martin'
  const strToArr = str.split(' '); // ['George','Raymond', 'Richard', 'Martin']
  const firstLetterArray = strToArr.map((word) => {
    return word[0];
  }); // ['G', 'R','R', 'M']
  const newString = firstLetterArray.join(''); // 'GRRM'
  return newString; // 'GRRM'
};
// const getInitialsSimplified = (str) => (
//   str.split(' ').map((word) => word[0]).join(' ')
// )

result = getInitials(input);

console.log(result); // 'GRRM'
