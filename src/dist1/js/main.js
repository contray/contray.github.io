var mainBtn = document.getElementById('modal-window-btn');
var modalWindow = document.getElementsByClassName('modal-window')[0];
var close = document.getElementsByClassName('modal-window-close')[0];

mainBtn.onclick = function() {
    modalWindow.style.display = "block";
}
close.onclick = function() {
    modalWindow.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modalWindow)
        modalWindow.style.display = "none";

}