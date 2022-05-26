// 1 forma de escribir funciones
function foo() {
  console.log('Hello world');
}
// 2 forma de escribir funciones
const foo2 = function () {
  console.log('Hello world 2');
  return 1;
};
// 3º
const foo3 = () => {
  console.log('Hello world 3');
};

// como ejecutar las funciones
// foo();
// foo2();
// foo3();º

// foo2 retorna un valor 1 que se asigna a returnValue
// const returnValue = foo2();
// console.log('resultado: ', returnValue);

// parametros
const suma = (num1, num2) => {
  return num1 + num2
}

// const sumaRefactor = (num1, num2) => console.log(num1, num2) || (
//  num1 + num2
// );
// funcion suma post refactor
const sumaRefactor = (num1, num2) => (
  num1 + num2
)

const sumaValue = sumaRefactor(1, 2);
// console.log(sumaValue);
/* --- functions return object */
const user = (name, age) => {
  let userName = name;
  let userAge = age;
  const updatName = newName => {
    userName = newName;
  };
  const getName = () => userName;
  const getAge = () => userAge;
  return {
    updatName,
    getName,
    getAge,
    userName,
    userAge,
  };
};

const kevinUser = user('Kevin', 28);
// console.log(kevinUser);
kevinUser.updatName('kevin julian');
// console.log(kevinUser.userName);
// console.log(kevinUser.getName());

// ...args
const lista = (...args) => {
  console.log(args);
};
// lista();
// lista(1, 2, 'asdasd', false);
// lista([1, 2, 3], ['test', 'test2']);
/* --- funciones que retornan funciones --- */
// const multi2 = a => a * 2;
// const multi3 = a => a * 3;

const crearMultiplicadores = b => a => a * b;

const multi2 = crearMultiplicadores(2);
const multi3 = crearMultiplicadores(3);

console.log(multi2(9));
console.log(multi3(9));
console.log(crearMultiplicadores(2)(9));
