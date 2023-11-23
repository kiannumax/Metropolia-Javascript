'use strict';

let participants = [];
let count = parseInt(prompt("Enter the amount of participants"));

for (let i = 1; i <= count; i++) {
    participants.push(prompt(`Enter ${i} participant's name`));
}

participants.sort()
let list = "";

for (let name of participants) {
    list += `<li>${name}</li>`;
}

document.querySelector("#participants").innerHTML = list;
