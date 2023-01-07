const wordOccurrence = (word, phrase) => {
  let result = 0; // O(1)
  const array = phrase.split(' '); // O(1)
  for (let i = 0; i < array.length; i++) {
    // n times
    if (word.toLowerCase() === array[i].toLowerCase()) {
      // O(1)
      result += 1; // O(1)
    }
  }
  return result; // O(1)
}; // time complexity => O(n);

const bubble_sort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    // n times
    for (let j = 0; j < list.length - 2; j++) {
      // n times
      if (list[j + 1] < list[j]) {
        // O(1)
        const temp = list[j]; // O(1)
        list[j] = list[j + 1]; // O(1)
        list[j + 1] = temp; // O(1)
      }
    }
  }
  return list; // O(1)
}; // time complexity => O(n^2);

const factorial = (n) => {
  if (n === 0) {
    // O(1)
    return 1; // O(1)
  } else {
    // O(1)
    return n * factorial(n - 1); // n times
  }
}; // time complexity => O(n);

const bobIsFirst = (people) => {
  return people[0] == 'bob'; // O(1)
}; // time complexity => O(1);

const isPalindrome = (input) => {
  const stack = []; // O(1)
  let output = ''; // O(1)
  for (let i = 0; i < input.length; i++) {
    // n times
    stack.push(input[i]); // O(1)
  }
  while (stack.length) {
    // n times
    output += stack.pop(); // O(1)
  }
  return output == input; // O(1)
}; // time complexity => O(n);

const sumOfDivisors = (n) => {
  let result = 0; // O(1)
  let i = 1; // O(1)
  while (i < n) {
    // n times
    if (n % i == 0) {
      // O(1)
      result += i; // O(1)
    }
  }
  return result; // O(1)
}; // time complexity => O(n);

const printAllNumbersThenSumPairs = (numArray) => {
  numArray.forEach((num) => console.log(num)); // n times
  numArray.forEach((num, index) => {
    // n times
    if (index < numArray.length - 1) {
      // O(1)
      console.log(num + numArray[index + 1]); // O(1)
    }
  });
}; // time complexity => O(n);

const isPrime = (num) => {
  if (num == 1 || num == 2) {
    // O(1)
    return false; // O(1)
  }
  for (let i = 2; i < num - 1; i++) {
    // n times
    if (num % 1 == 0) {
      // O(1)
      return false; // O(1)
    }
  }
  return true; // O(1)
}; // time complexity => O(n);
