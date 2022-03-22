const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');
const cartItem = document.querySelector('.cart-items-container');
const cartBtn = document.querySelector('#cart-btn');
const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
});

cartBtn.addEventListener('click', () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
});

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
});

window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}