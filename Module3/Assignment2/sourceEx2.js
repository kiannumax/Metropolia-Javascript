'use strict';

let strings = ["First", "Second", "Third"]

for (let i = 0; i < 3; i++) {
    let element = document.createElement('li');
    element.innerText = `${strings[i]} item`;

    document.getElementById("target").appendChild(element);
}

document.querySelectorAll('li')[1].className = 'my-item';
