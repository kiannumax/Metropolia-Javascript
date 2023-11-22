'use strict';

const count = prompt("Enter a number of dice rolls");
let sum = 0;

for (let i = 0; i < count; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}

document.querySelector("#dice").innerHTML = "The sum of all dice rolls is: " + sum;
