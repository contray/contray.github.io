//Заказать комплектацию 
var formComplex= document.getElementById('form-complex');
var buttonComplex= document.getElementById('button-complex'); 
var closeComplex= document.getElementById('close-complex');

buttonComplex.onclick = function () {
	formComplex.style.display = "block";
}

closeComplex.onclick = function () {
	formComplex.style.display = "none";
}
window.onclick = function(event){
	if(event.target == formComplex){
		formComplex.style.display = "none";
	}
}
//форма заказа 
var formOrder = document.getElementById('form-order');

var btn = document.getElementsByClassName("button");
  for (var i = 0 ; i < btn.length; i++) {
  	btn[i].onclick = function() {
  		formOrder.style.display = "block";
  	}
  }

var orderClose = document.getElementById("order-close");

orderClose.onclick = function() {
	formOrder.style.display = "none";
}
window.onclick = function(event){
	if(event.target == formOrder){
		formOrder.style.display = "none";
	}
}

// forma для звонка 
var formPhone = document.getElementById('form-phone');

var btnPhone = document.getElementsByClassName("btn-phone");
  for (var i = 0 ; i < btnPhone.length; i++) {
  	btnPhone[i].onclick = function() {
  		formPhone.style.display = "block";
  	}
  }

var phoneClose = document.getElementById("phone-close");

phoneClose.onclick = function() {
	formPhone.style.display = "none";
}
window.onclick = function(event){
	if(event.target == formPhone){
		formPhone.style.display = "none";
	}
}