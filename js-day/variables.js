// hello world example
// console.log("Helo world 'clase'");
// console.log('Helo world "clase"');
/*
Comentario

multilinea
*/

/* --- Variables --- */
var number = 1234;
var str = 'lorem ipsum';
var boolean = true;
var object = {};
var array = [1, 2];

// console.log(str);
// console.log(number);

// console.log(random);

var random = 'random value'; // 🤔
// esto es debido al hoisting
// let, const
let cadenaDeTexto = 'cadena de texto con let';
let secondBoolean = false;
const constValue = 'example';

cadenaDeTexto = 'cambio';
// var str = 'var str';
// const no puede cambiar, es read-only
// constValue = 'test';
// console.log(str);
// console.log(cadenaDeTexto);

/* --- tipos --- */
// console.log(typeof 123); // number
// console.log(typeof 12.2); // number
// console.log(typeof 'lorem ipsum'); // string
// console.log(typeof false); // boolean
// console.log(typeof {}); // object
// console.log(typeof [1, 2, 3]); // object
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

let myNumber = 123;
// console.log(myNumber.toString());
myNumber = 'lorem';
// console.log(myNumber - 1);
// console.log(typeof NaN);
// console.log(Math.random());

const firstText = 'Lorem ipsum';
const finalText = 'dolor sit amet!';

const fullText = firstText + '\n' + finalText;
const templateText = `
${firstText}

  ${finalText}
  
  
  `;
// console.log(fullText);
// console.log(templateText.trim());
const id = 'd234-dg123-asd123-123';
// console.log(id.split('-')); // ['d234', 'dg123', 'asd123', '123']
const numberError = 1223;
// console.log(numberError.split('2'));

