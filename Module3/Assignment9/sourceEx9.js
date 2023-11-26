'use strict';

let button = document.getElementById('start');

function calculate() {
    var calculation = document.getElementById('calculation').value.split(' ');

    console.log(calculation)

    var num1 = parseInt(calculation[0]);
    var num2 = parseInt(calculation[2]);
    var result;

    switch(calculation[1]) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
    }

    document.getElementById('result').innerText = result;
}

button.addEventListener('click', calculate);
