const title = document.querySelector('title');
const html = document.querySelector('html');

const langButton = document.querySelector('.langButton');

const barItems = [
  document.querySelector('.barItem1'),
  document.querySelector('.barItem2'),
  document.querySelector('.barItem3'),
  document.querySelector('.barItem4')
];

const welcomeTxt = document.querySelector('.welcomeTxt');

const prices1 = document.querySelector('.prices1');
const prices2 = document.querySelector('.prices2');

const infoTitle = document.querySelector('.infoTitle');
const info = document.querySelectorAll('.info');

const lessonsTitle = document.querySelector('.lessonsTitle');
const lessons = document.querySelectorAll('.lessons');

const contactTitle = document.querySelector('.contactTitle');
const contact = document.querySelectorAll('.contact');


let selectedLang = JSON.parse(localStorage.getItem('selectedLang')) || 0;


html.dir = lang.dir[selectedLang];
html.lang = lang.lang[selectedLang];
title.innerHTML = lang.title[selectedLang];

barItems.forEach((value, index) => {
  value.innerHTML = lang[`barItem${index + 1}`][selectedLang];
});

welcomeTxt.innerHTML = lang.welcomeTxt[selectedLang];

langButton.innerHTML = lang.langButton[selectedLang];

prices1.innerHTML = lang.prices1[selectedLang];
prices2.innerHTML = lang.prices2[selectedLang];

infoTitle.innerHTML = lang.infoTitle[selectedLang];
info.forEach((value) => {
  value.innerHTML = lang[value.classList.toString().split(' ')[1]][selectedLang];
});

lessonsTitle.innerHTML = lang.lessonsTitle[selectedLang];
lessons.forEach((value) => {
  value.innerHTML = lang[value.classList.toString().split(' ')[1]][selectedLang];
});

contactTitle.innerHTML = lang.contactTitle[selectedLang];
contact.forEach((value) => {
  value.innerHTML = lang[value.classList.toString().split(' ')[1]][selectedLang];
});



langButton.addEventListener('click', () => {
  if (!selectedLang) {
    selectedLang = 1;
  } else {
    selectedLang = 0;
  }
  localStorage.setItem('selectedLang', JSON.stringify(selectedLang));
  window.location.reload();
});