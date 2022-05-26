
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

// 1. render list
const addMenuListItems = (list) => {
  const createMenuItem = (name) => {
    const li = document.createElement('li');
    li.textContent = name;
    return li;
  };
  list.forEach((menuItem) => {
    const liElement = createMenuItem(menuItem);
    animeList.appendChild(liElement);
  });
};

// addMenuListItems(menuItems);

// setTimeout(() => {
//   addMenuListItems(['k-on', 'bleach']);
// }, 3000);
// 2. render with innerHTML
const listTemplate = (title) => {
  return `<li>${title}</li>`;
};

const teamplateList = [...menuItems, 'evangelion'].map((menuItem) => {
  return listTemplate(menuItem);
}).join('');

// animeList.innerHTML = teamplateList;

// setTimeout(() => {
//   animeList.innerHTML = animeList.innerHTML + listTemplate('k-on');
// }, 3000);

// 3. template
const articleTemplate = document.querySelector('#article');
const mainListContent = document.getElementById('main-list-content');

const renderArticle = (name, url) => {
  const clone = articleTemplate.content.cloneNode(true);
  const figCaption = clone.querySelector('figcaption');
  const img = clone.querySelector('img');
  figCaption.textContent = name;
  img.src = url;
  img.title = name;
  img.alt = name;
  mainListContent.appendChild(clone);
};

const data = [
  {
    name: 'Attack on Titan Season 3 Part 2',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104578-LaZYFkmhinfB.jpg',
  },
  {
    name: 'FLCL',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx227-kxQ3PDHrrqp5.jpg',
  },
  {
    name: 'THE END OF EVANGELION',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx32-i4ijZI4MuPiV.jpg',
  },
  {
    name: 'The Slayers Next',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx535-xCRCSK8YG89S.png',
  },
  {
    name: 'Death Note',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-lawCwhzhi96X.jpg',
  },
];

data.forEach((menuItem) => {
  renderArticle(menuItem.name, menuItem.image);
});
menuItems.forEach((item) => {
  animeList.innerHTML += '<li>' + item + '</li>'
});
// renderizado innerHTML cada elemento
setTimeout(() => {
  menuItems.forEach((item) => {
    animeList.innerHTML += `<li>${item}</li>`
  });
}, 3000);
