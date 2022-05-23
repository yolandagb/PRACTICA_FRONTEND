// Async call to an API
const getNames = () => (
  new Promise(resolve => {
    setTimeout(() => {
      resolve(['luka', 'jordan', 'kobe']);
    }, 1000);
  })
);

console.log('hello');

getNames()
  .then(info => {
    console.log('promesa terminada');
    console.log(info);
  });

const init = async () => {
  const info = await getNames();
  console.log('promesa terminada');
  console.log(info);
};

init();

