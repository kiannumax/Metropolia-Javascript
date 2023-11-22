'use strict';

let nums = []
console.log('ed')
for(let i = 0; i < 5; i++) {
    nums.push(parseInt(prompt("Enter an integer")))
}

for(let i = nums.length - 1; i >= 0; i--) {
    console.log(nums[i])
}
