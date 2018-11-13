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
/*
categoryBtn.onclick = function(){
	if(categoryList.className === "search-category__list"){
		categoryList.className += " show";
	}else {
		categoryList.className = "search-category__list";
	}
}*/