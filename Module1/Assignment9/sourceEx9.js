'use strict';

const num = parseInt(prompt("Enter an integer"));
let prime = true;

for (let i = 1; i < num; i++) {
    if (num % i == 0) {
        prime = false;
    }
}

let message;
if (prime) {
    message = num + " is a prime number!";
} else {
    message = num + " is not a prime number";
}

document.querySelector("#prime").innerHTML = message;
