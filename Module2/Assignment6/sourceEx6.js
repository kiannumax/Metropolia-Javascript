'use strict';

function diceroll() {
    return Math.floor(Math.random() * 6) + 1;
}

let list = "";

while(true) {
    let dicenum = diceroll();

    if(dicenum == 6) {
        break;
    }

    list += `<li>${dicenum}</li>`;
}

document.querySelector("#dice").innerHTML = list;
