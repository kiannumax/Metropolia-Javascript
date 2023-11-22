'use strict';

const year = parseInt(prompt("Enter a year"));
let leap = " is not a leap year.";

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            leap = " is a leap year.";
        }
    } else {
        leap = " is a leap year.";
    }
}

document.querySelector("#year").innerHTML = "Year " + year + leap;
