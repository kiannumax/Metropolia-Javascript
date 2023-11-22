'use strict';

const decision = confirm("Should I calculate the square root?");
let message;

if (decision) {
    let num = parseInt(prompt("Enter a number"));

    if (num < 0) {
        message = "The square root of a negative number is not defined.";
    } else {
        message = Math.sqrt(num).toString();
    }

} else {
    message = "The square root is not calculated.";
}

document.querySelector("#sqrt").innerHTML = message;
