'use strict';
function even(list) {
    var newlist = [];

    for (let num of list) {
        if (num % 2 == 0) {
            newlist.push(num);
        }
    }

    return newlist;
}

let testList = [22, 5, 3, 7, 8, 56, 2, 1];
console.log(`Original list: ${testList}; List with evens: ${even(testList)}`);
