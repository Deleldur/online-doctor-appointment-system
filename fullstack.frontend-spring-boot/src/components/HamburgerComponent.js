const hamburger = document.getElementById('burger');
const navUL = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
   navUL.classList.toggle('show');
});