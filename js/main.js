const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu__shadow');
const body = document.querySelector('body');

menuBtn.addEventListener('click', ()=>{
	menuList.classList.toggle('menu__list--open');
	menuShadow.classList.toggle('menu--open');
	body.classList.add('menu--scroll');
});

menuClose.addEventListener('click', ()=>{
	menuList.classList.remove('menu__list--open');
	menuShadow.classList.remove('menu--open');
	body.classList.remove('menu--scroll');
});

// document.querySelector('.menu__link').addEventListener('click', ()=>{
// 	menuList.classList.remove('menu__list--open');
// 	menuShadow.classList.remove('menu--open');
// 	body.classList.remove('menu--scroll');
// });
