let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active'); 
    SearchFrom.classList.remove('active');
    cartItem.classList.remove('active');
}

let SearchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    SearchFrom.classList.toggle('active'); 
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active'); 
    navbar.classList.remove('active');
    SearchFrom.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    SearchFrom.classList.remove('active');
    cartItem.classList.remove('active');
}