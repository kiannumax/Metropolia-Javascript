'use strict';

const name = prompt("Write your name");
let num = Math.floor(Math.random() * 4) + 1;
let group;

switch(num) {
    case 1:
        group = "Gryffindor";
        break;

    case 2:
        group = "Slytherin";
        break;

    case 3:
        group = "Hufflepuff";
        break;

    case 4:
        group = "Ravenclaw";
        break;
}

document.querySelector("#student").innerHTML = name + ", you are " + group + '.';
