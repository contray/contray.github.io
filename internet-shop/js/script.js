// Модальные окна регистрации и формы входа 
var popupLogin = document.querySelector('#login'),
  loginClose = document.querySelector('.popup-close'),
  openLogin = document.querySelector('.account-list__entry'),
  popupRegister = document.querySelector('#register'),
  openRegister = document.querySelector('.account-list__register')
  registerClose = document.querySelector('#register-close');
function showModal(popupLogin){
	popupLogin.classList.add('show');
}
function hideModal(popupLogin){
	popupLogin.classList.remove('show');
}
openLogin.onclick = function(){
	showModal(popupLogin);
}
openRegister.onclick = function (){
	showModal(popupRegister);
}
loginClose.onclick = function(){
	hideModal(popupLogin);
}
registerClose.onclick = function (){
	hideModal(popupRegister);
}

window.onclick = function(event){
	if(event.target == popupLogin){
		hideModal(popupLogin);
	}
}
window.onclick = function(event){
	if(event.target == popupRegister){
		hideModal(popupRegister);
	}
}



var categoryBtn = document.querySelector(".search-category__btn"),
    categoryList = document.querySelector(".search-category__list");

categoryBtn.onclick = function(){
	if(categoryList.className === "search-category__list"){
		categoryList.className += " show";
	}else {
		categoryList.className = "search-category__list";
	}
};


var menuBtnClose = document.querySelector('.nav-btn'),
    menu = document.querySelector(".nav__list"),
    menuBtn = document.getElementById("nav-burger");
menuBtn.onclick = function showNav() {
	if(menu.className === "nav__list"){
		menu.className += " nav-mobile";
		menuBtnClose.className += " nav-btn-close";
	}else {
		menu.className = "nav__list";
		menuBtnClose.className = "nav-btn";
	}
}






// выезд сайтбара 




// Конец счетчика товара 




































