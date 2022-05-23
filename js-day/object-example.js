/* -- objects -- */
const team = 'Dallas Mavericks';

const player = {
  'name': 'luka',
  team,
  active: true,
  title: undefined,
  // getStats: () => console.log('TBD'),
  stats: {
    '3Points': '35%',
    'play-offs': 3,
  },
};
// console.log(player.name);
// console.log(player.team);
// console.log(player.stats);
// console.log(player.stats['play-offs']);

player.stats.color = 'blue';
// console.log(player);

// No se pueden copiar objectos en JS de esta forma
// el B puede cambiar al original
// const playerB = player;
// playerB.name = 'curry';

// formas de copiar objetos en javascript
// 1. JSON.parse(JSON.stringify())

const playerB = JSON.parse(JSON.stringify(player));

playerB.name = 'curry';

// console.log(player);
// console.log(playerB);

// 2. structuredClone 🪄 (not valid with funciton)
const playerC = structuredClone(player);
playerC.name = 'wiggins';

playerC.stats.color = 'yellow';
playerC.stats['3Points'] = '42%';

// console.log(player);
// console.log(playerC);
// 3. Spread operator!!!! el de los ...
const playerD = {
  ...player,
  name: 'klay',
  stats: {
    ...player.stats,
    color: 'yellow',
    'play-offs': 6,
    rings: 4,
  },
};

// console.log(player);
// console.log(playerD);
const basicInfo = {
  name: 'User1',
  email: 'test@test.com'
};
const extraInfo = {
  phone: 92938123,
  city: 'Madrid',
  name: '????',
};

const expectedResult = {
  ...basicInfo,
  ...extraInfo,
  // name: 'User1',
  // email: 'test@test.com',
  // phone: 92938123,
  // city: 'Madrid',
};
// console.log(expectedResult);
const goldenStateMainRoster = [playerB, playerC]
const goldenStateBench = [playerD]

const allGoldenStatePlayers = [
  ...goldenStateMainRoster,
  ...goldenStateBench,
];
console.log(allGoldenStatePlayers);

