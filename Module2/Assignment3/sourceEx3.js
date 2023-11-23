'use strict';

let dogs = [];

for (let i = 1; i < 7; i++) {
    dogs.push(prompt(`Enter ${i} dog's name`));
}

dogs.sort().reverse();
let list = "";

for (let dog of dogs) {
    list += `<li>${dog}</li>`;
}

document.querySelector("#dogs").innerHTML = list;
