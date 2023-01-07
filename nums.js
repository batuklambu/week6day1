// // Determine if every number is greater than or equal to 0
//every

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
// let resultnums = nums.every((e) => e > 0);
// console.log(resultnums);

let resultnums = nums.every(function (e) {
  return e > 0;
});
console.log(resultnums);

// Filter

// filter the array for numbers less than 4

let resultnums1 = nums.filter(function (e) {
  return e < 4;
});
// let resultnums1 = nums.filter((e) => e < 4);

console.log(resultnums1);

// Find
//Find the first value divisible by 5

const findDivisibleBy = (array, num) =>
  array.find((val) => val % num === 0 && val !== 0);

console.log(findDivisibleBy(nums, 5));

// find the index of the first number that is divisible by 3

const isdivisible = (element) => element % 3 === 0;

console.log(nums.findIndex(isdivisible));

// For Each
//console.log each value of the nums array multiplied by 3

const multiplier = 3.0;
const newNums = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

nums.forEach((num1) => {
  const newNum1 = num1 * multiplier;
  newNums.push(newNum1);
});

console.log(newNums);

// Map
// make a new array of each number multiplied by 100

const map1 = nums.map((x) => x * 100);

console.log(map1);

// Some
// Find out if some numbers are divisible by 7

const divisible = (element) => element % 7 === 0;
console.log(nums.some(divisible));

// Reduce

// Add all the numbers in the array together using the reduce method

const sum = nums.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum);

// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
// Sort the numbers in ascending order
// Sort the numbers in descending order

nums.sort();
console.log(nums);

// Sort the numbers in decending order

const sortedAssendingNumbers = nums.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedAssendingNumbers);

// Sort the numbers in decending order

const sortedDeSendingNumbers = nums.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});

console.log(sortedDeSendingNumbers);
