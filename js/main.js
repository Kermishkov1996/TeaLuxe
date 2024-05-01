const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu__shadow');
const body = document.querySelector('body');

//открывает меню при нажатии на бургер
menuBtn.addEventListener('click', ()=>{
	menuList.classList.toggle('menu__list--open');
	menuShadow.classList.toggle('menu--open');
	body.classList.add('menu--scroll');
});

//функция для закрытия меню
function close() {
	menuList.classList.remove('menu__list--open');
	menuShadow.classList.remove('menu--open');
	body.classList.remove('menu--scroll');
}

//закрывает меню при нажатии на крестик в меню
menuClose.addEventListener('click', ()=>{
	close();
});

//закрывает меню при нажатии на ссылку в меню
menuList.addEventListener('click', (event)=>{
	if(event.target.tagName === "A")
	close();
});

//закрывает меню при нажатии на поле за пределами меню
menuShadow.addEventListener('click', close);

