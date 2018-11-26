//количество товара 

 var addProduct = document.querySelector('#product-add'),
     delProduct = document.querySelector('#product-delete'),
     count = document.querySelector('.card-product__quantity'),
     countNumber = 1;
 addProduct.onclick = function() {
 		countNumber++;
 		count.textContent = countNumber;
 }
 delProduct.onclick = function() {
 	if(countNumber > 1){
 		countNumber--;
 		count.textContent = countNumber;
 	}
     else {
     	count.textContent = countNumber;
     }
 }

 // Скрипт таба 
 var tab = document.getElementsByClassName('product-tab'),
 tabContent = document.getElementsByClassName('product-tab__content'),
 tabs = document.getElementById('product-tabs');

 window.onload = function () {
 	hideTabsContent(1);
     console.log(tab);
     console.log(tabContent);
 }

 function hideTabsContent(a) {
	for( var i = a ; i < tabContent.length ; i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hidden');
		tab[i].classList.remove('product-tab-active');

}
}

tabs.onclick = function(event){
	
	var target = event.target;
	if( target.className == 'product-tab' || target.className == 'product-tab product-tab-active' ){
		
		for ( var i = 0; i < tab.length; i++){
			if( target == tab[i]){
				hideTabsContent(0);
				tab[i].classList.add('product-tab-active');
				tabContent[i].classList.remove('hidden');
				tabContent[i].classList.remove('show');


			}
			    
		}
	}

}
