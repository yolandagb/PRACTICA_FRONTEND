// funcion que devuelve jugadores pasado un timer

// 1. callback
const asyncFunction = (callback) => {
  setTimeout(() => {
    const players = ['luka', 'jordan', 'curry', 'lebron'];
    callback(null, players);
  }, 2000);
};

asyncFunction((error, result) => {
//  console.log(result);
});

// 2. Promises
const asyncFunctionPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const players = ['luka', 'jordan', 'curry', 'lebron'];
      resolve(players);
    }, 2000);
  });
};

console.log('hellooo');
asyncFunctionPromise()
  .then((result) => {
    console.log('promise then', result)
    return asyncFunctionPromise();
  })
  .then((result) => {
    console.log('second promise', result)
  })
  .catch(error => {
    console.log('promise catch', error)
  });

/**
 * EJEMPLO: funciones de libros asincronas
 */

/* --- ejemplo de funciones asincronas --- */
const getBookList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const books = [
         {
          id: 1,
           title: 'Lord of the rings',
        },
        {
          id: 2,
          title: 'Harry potter',
        }
      ];
      resolve(books);
    }, 2000);
  });
};
const getBookItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({
          id: 1,
          title: 'Lord of the rings',
          description: 'lorem ipsum dolor',
          oscars: 15
        });
      }
      if (id === 2) {
        resolve({
          id: 2,
          title: 'Harry potter',
          description: 'lorem ipsum dolor',
          oscars: 0
        });
      } else {
        const error = new Error('No book with that id');
        reject(error);
      }
    }, 2000);
  });
};
/* ------ fin ejemplo de funciones ------- */

console.log('hola');
getBookList()
  .then((bookList) => {
    console.log(bookList);
    return getBookItem(2123);
// Cambiar el then con return para no tener callback hell
//     .then((bookDetail) => {
//        console.log(bookDetail);
//      })
  }).then((bookDetail) => {
    console.log(bookDetail);
  // En promesas el catch captura cualquier reject de las promesas anteriores
  }).catch(error => {
    console.log(error);
  })
console.log('bye bye');
// 3. Option async/await
// Importante siempre await dentro de una función async
const init = async () => {
  try {
    const books = await getBookList();
    const bookDetail = await getBookItem(books[0].id);
    console.log('async/await', bookDetail);
  } catch (error) {
    console.log(error);
  }
};

init();
