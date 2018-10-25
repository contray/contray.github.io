var formOrder= document.getElementById('form-order'); 
var formComplex= document.getElementById('form-complex');
var buttonComplex= document.getElementById('button-complex');  
var btn = document.getElementsByClassName("button")[0];
var closeComplex= document.getElementById('close-complex');

buttonComplex.onclick = function () {
	formComplex.style.display = "block";
}
btn.onclick = function () {
	formOrder.style.display = "block";
}
closeComplex.onclick = function () {
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




console.log(formOrder);
console.log(formComplex);
console.log(buttonComplex);
console.log(btn);
