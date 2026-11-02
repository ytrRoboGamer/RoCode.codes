const title = document.querySelector('title');

let selectedLang = JSON.parse(localStorage.getItem('selectedLang')) || 0;

title.innerHTML = lang.title[selectedLang];