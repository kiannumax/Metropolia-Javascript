'use strict';

let num1 = parseInt(prompt("Type your first number"));
let num2 = parseInt(prompt("Type your second number"));
let num3 = parseInt(prompt("Type your third number"));

document.querySelector("#sum").innerHTML = num1 + num2 + num3;
document.querySelector("#product").innerHTML = num1 * num2 * num3;
document.querySelector("#average").innerHTML = (num1 + num2 + num3) / 3;