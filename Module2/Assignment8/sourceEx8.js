'use strict';
function concat(list) {
    var result = "";

    for (let str of list) {
        result += str;
    }

    return result;
}

document.querySelector("#concat").innerHTML = concat(["Joe", "Max", "Clay", "Robert"]);
