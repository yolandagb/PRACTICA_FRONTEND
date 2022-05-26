
const fromFile = 'Hello world!!!';
// Selectors
const items = document.querySelectorAll('.show-item');
const showItems = document.getElementsByClassName('show-item');
// document.getElementById

// console.log([...items]);
// console.log(showItems);
// const showItemsArray = [...showItems];

// items.forEach((item) => {
//   console.log(item.innerHTML);
// });

// showItemsArray.forEach((item) => {
//   console.log('showItemsArray item', item.innerHTML)
// });

const navbar = document.querySelector('.navbar');

console.log(navbar.innerText);
console.log(navbar.className);
// navbar.innerText = 'Texto desde <b>javascript</b>';
// navbar.innerHTML = 'Texto desde';
// navbar.className = navbar.className + ' nueva js-example';
navbar.classList.add('nueva');
navbar.classList.add('js-example');

setTimeout(() => {
  navbar.classList.toggle('js-example');
  navbar.classList.remove('nueva');
}, 2000);

setTimeout(() => {
  navbar.classList.toggle('js-example');
}, 5000);
const animeList = document.getElementById('anime-list');

const menuItems = [
  'Detective conan',
  'Full metal',
  'Kill la kill',
  'Shingeky no kiokin',
];

const createMenuItem = (name) => {
  const li = document.createElement('li');
  li.textContent = name;
  return li;
};
menuItems.forEach((menuItem) => {
  const liElement = createMenuItem(menuItem);
  animeList.appendChild(liElement);
});

// heavy task
// Eventos
