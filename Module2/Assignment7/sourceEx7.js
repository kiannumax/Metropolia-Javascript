'use strict';
function diceroll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let list = "";
let dicesides = parseInt(prompt("Enter the amount of sides in a dice"))

while(true) {
    let dicenum = diceroll(dicesides);

    if(dicenum == dicesides) {
        break;
    }

    list += `<li>${dicenum}</li>`;
}

document.querySelector("#dice").innerHTML = list;
