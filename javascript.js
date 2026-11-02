const title = document.querySelector('title');
const html = document.querySelector('html');

const langButton = document.querySelector('.langButton');

const barItem1 = document.querySelector('.barItem1');
const barItem2 = document.querySelector('.barItem2');
const barItem3 = document.querySelector('.barItem3');

const welcomeMessage = document.querySelector('.welcomeMessage');

const infoTitle = document.querySelector('.infoTitle');
const pricesTitle = document.querySelector('.pricesTitle');
const contactTitle = document.querySelector('.contactTitle');

let selectedLang = JSON.parse(localStorage.getItem('selectedLang')) || 0;


html.dir = lang.dir[selectedLang];
html.lang = lang.lang[selectedLang];
title.innerHTML = lang.title[selectedLang];

infoTitle.innerHTML = lang.infoTitle[selectedLang];
pricesTitle.innerHTML = lang.pricesTitle[selectedLang];
contactTitle.innerHTML = lang.contactTitle[selectedLang];

langButton.innerHTML = lang.langButton[selectedLang];
langButton.classList.replace('langButtonNum', `langButton${selectedLang}`);

barItem1.innerHTML = lang.barItem1[selectedLang];
barItem2.innerHTML = lang.barItem2[selectedLang];
barItem3.innerHTML = lang.barItem3[selectedLang];

welcomeMessage.innerHTML = lang.welcomeMessage[selectedLang];


langButton.addEventListener('click', () => {
  if (!selectedLang) {
    selectedLang = 1;
  } else {
    selectedLang = 0;
  }
  localStorage.setItem('selectedLang', JSON.stringify(selectedLang));
  window.location.reload();
});