'use strict';

let nums = [];

while(true) {
    let num = parseInt(prompt("Enter an integer"));

    if(num == 0) {
        break;
    } else {
        nums.push(num);
    }
}

nums.sort((a,b) => b-a);

for (let num of nums) {
    console.log(num);
}
