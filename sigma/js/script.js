// Модальное окно 
var form = document.getElementsByClassName('form-wrap')[0];
var close = document.getElementsByClassName('form-close')[0];
var btn = document.getElementById('button');

btn.onclick = function () {
	form.style.display = "block";
}
close.onclick = function () {
	form.style.display = "none";
}
window.onclick = function(event){
	if(event.target == form){
		form.style.display = "none";
	}
}
// конец скрипта для модаального окна 

// скрипт для меню 

var menuBtn = document.getElementById('menu-btn');
var menuMobile = document.getElementsByClassName('menu-list')[0];

menuBtn.onclick = function(){
	if(menuMobile.className === "menu-list"){
		menuMobile.className += " menu-mobile";
	}else {
		menuMobile.className = "menu-list";
	}
}
// Конец скрипта для адаптивного меню 