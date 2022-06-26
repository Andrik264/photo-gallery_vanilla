var root = document.documentElement;
const lists = document.querySelectorAll('.hs'); 

lists.forEach(el => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});

const im = document.querySelector('.hs');
const nextButton = document.getElementById('scroll-button-next');
const backButton = document.getElementById('scroll-button-back');

const buttons = [nextButton, backButton];
nextButton.addEventListener('click', (event) => {
  im.scrollBy(150, 0);
})
backButton.addEventListener('click', (event) => {
  im.scrollBy(-150, 0);
})