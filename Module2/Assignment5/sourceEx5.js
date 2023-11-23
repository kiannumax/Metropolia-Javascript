'use strict';

let nums = [];

while(true) {
    let num = parseInt(prompt("Enter an integer"));

    if(nums.includes(num)) {
        alert("That number was already entered before!");
        break;
    } else {
        nums.push(num);
    }
}

nums.sort((a,b) => a-b);

for (let num of nums) {
    console.log(num);
}