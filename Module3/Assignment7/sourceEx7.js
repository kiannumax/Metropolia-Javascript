'use strict';

let par = document.getElementById("trigger");

function hover() {
    var img = document.getElementById('target');
    img.src = "img/picB.jpg";
}

function unHover() {
    var img = document.getElementById('target');
    img.src = "img/picA.jpg";
}

par.addEventListener('mouseover', hover);
par.addEventListener('mouseout', unHover);
