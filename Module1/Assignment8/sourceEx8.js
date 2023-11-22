'use strict';

let list = "";

const yearStart = parseInt(prompt("Enter a start year"));
const yearEnd = parseInt(prompt("Enter an end year"));

for (let year = yearStart; year <= yearEnd; year++) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                list += "<li>" + year + "<i/>";
            }
        } else {
            list += "<li>" + year + "<i/>";
        }
    }
}

document.querySelector("#leaps").innerHTML = list;
