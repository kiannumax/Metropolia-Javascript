'use strict';

let button = document.getElementById('start');

function calculate() {
    var operation = document.getElementById('operation').value;

    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var result;

    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
    }

    document.getElementById('result').innerText = result;
}

button.addEventListener('click', calculate);
