'use strict';

// ARRAY FUNCTIONS

const nums = [2,4,6,8,10,12];

// TYPE 1
// for (let i=0; i < nums.length, i++) {
//     console.log(nums[i]);
// }

//ENHANCED FOR LOOP
// for (let num of nums) {
//     console.log(num);
// }

// SHORTCUT OF ENCHANCED FOR LOOP
nums.forEach(num => console.log(num));

// FILTERS
const even = nums.filter(num => num % 2 === 0);
console.log(even);

// MAP converts each value to something else
const squared = nums.map(num => num ** 2);
console.log(squared);

// REDUCE - reduce array down to a single value
const sum = nums.reduce((accumulator, next) => accumulator+next);
console.log(sum);

// stringing together
const strings = ["1", "2", "3", "4", "5"];
strings.map(s => parseInt(s)).filter(num => 2 !== 0).reduce((acc,next) => Math.max(acc,next));
console.log(strings);