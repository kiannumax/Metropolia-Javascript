'use strict';

const count = parseInt(prompt("How many dice to roll"));
const sumExp = parseInt(prompt("What is the expected sum?"));
let   matches = 0;

for (let i = 0; i < 12000; i++) {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }

    if (sum == sumExp) {
        matches ++;
    }
}

const probability = (matches / 12000 * 100).toFixed(2);

document.querySelector("#prob").innerHTML = "Probability to get sum " + sumExp + " with " + count + " dice is " + probability + "%";
