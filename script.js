hamburger.addEventListener('click', () => menuLinks.classList.toggle('activeShow'))

changeicon = (bars) => bars.classList.toggle("fa-times"); 

const people = document.querySelector('.people');
let url = 'https://fakestoreapi.com/products';
let peopleData = [];