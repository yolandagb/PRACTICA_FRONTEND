/* --- control --- */
const condition = true;
if (condition) {
  console.log('paso por el if');
} else {
  console.log('paso por el else');
}

const num1 = 1; // number
const num2 = '1'; // string

const isEqual = num1 === num2;
// if (num1 === num2) {
if (isEqual) {
  console.log('Iguales');
} else {
  console.log('no son iguales');
}

const value = 'valor diferente';
// == o ===
switch (value) {
  case 1:
  case 2:
  case 3:
    console.log('1, 2, 3 number');
    break;
  case '1':
    console.log('1 string');
    break;
  default:
    console.log('no match');
}

// or
if (value === 1 || value === 2 || value === 3) {
  console.log('1, 2, 3 number');
} else if (value === '1') {
  console.log('1 string');
} else {
  console.log('no match');
}

const str = 'LOrem ipsum dolor sit';
if (str.length === 21 && str.includes('dolor')) {
  console.log('has dolor word and 21 characters');
}

/* --- scope --- */
console.log('<------SCOPE------>');
var example = 'otro valor';
let exampleLet = 'out of if scope';
if (true) {
  var example = 123;
  let exampleLet = 456;
}
console.log(example);
console.log(exampleLet);
console.log('Volvemos a las 11:50');

