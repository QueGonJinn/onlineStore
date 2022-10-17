import './index.html'; 
import './index.scss';

const inputBTN = document.querySelector('.search__button');
const input = document.querySelector('.input');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__next');
const closeElem = document.querySelector('.menu__next__close');

console.log(inputBTN);
console.log(input);

inputBTN.addEventListener('click', function() {
	input.classList.toggle('hidden');
})

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

