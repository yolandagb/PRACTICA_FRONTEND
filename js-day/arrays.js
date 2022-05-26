/* -- listas/array, bucles -- */
const arr = new Array(3);
arr.fill(1);
arr.push(20);
arr.push(3);
// arr.push(15);
// arr.length = 15;
// arr.fill(1, 11);
// console.log(arr);
const includes = arr.includes(5);
// console.log(includes);
// 2 forma de difinir array
const arr2 = ['pizza', 'burger', 'kebap'];
const arr3 = [].concat(arr2); // [...arr2]
arr3.reverse();
// console.log(arr3);

for (let i = 0; i < arr2.length; i++) {
  const element = arr2[i];
  // console.log(element);
}

/* --- map, filter --- */
const data = [1, 2, 3, 4, 5, 6];
const result = [];
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  result.push(element * 2);
}
// console.log(result);

const double = item => {
  return item * 2;
};

const nuevoResultado = data.map(double);
// console.log(nuevoResultado);
const mapConFuncionAnonima = data.map(item => {
  return item * 2;
});
// console.log(mapConFuncionAnonima);

const names = ['luka', 'jordan', 'kobe'];
const upperCaseNames = names.map((player) => {
  return {
    title: player.toUpperCase(),
    titleNoUpperCase: player,
  };
});
// console.log(upperCaseNames);
// filter
const filterPlayers = names.filter((player) => {
  return player.includes('o')
});
// console.log(filterPlayers);
const playerList = names
  .filter((player) => {
    return player.includes('o')
  })
  .map((player) => {
    return {
      name: player.toUpperCase(),
      nameNoUpperCase: player,
    };
  });
console.log(playerList);

