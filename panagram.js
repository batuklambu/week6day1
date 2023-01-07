const panagram = [
  'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog',
];

let resultpanagram = panagram.every((e) => e < 8);
console.log(resultpanagram);

// let resultpanagram = panagram.every(function (e) {
//   return e < 8;
// });
//console.log(resultpanagram);

// Filter

// filter words that have an even length
let resultpanagram1 = panagram.filter((e) => e.length == e.length);
console.log(resultpanagram1);

// Find
//find the first word that is longer than 5 characters

const found = panagram.find((element) => element.length > 5);

console.log(found);

//Find Index

// find the index of the first word that is less than 2 characters long

const isLessTwoChar = (element) => element.length < 2;

console.log(panagram.findIndex(isLessTwoChar));

// For Each
// console.log each word with an exclamation point at the end of it

panagram.forEach((l, i) => (panagram[i] = `${l}!`));

console.log(panagram);

// Map
// make a new array of all the words in all uppercase

const upperCasedPanagram = panagram.map(function (p) {
  return p.toUpperCase();
});
console.log(upperCasedPanagram);

//some
// Find out if some words have the letter ain them

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

console.log(checkAvailability(panagram, 'a')); // false

// Reduce

// concatenate all the words using reduce

const concatenate = panagram.reduce(
  (prevValue, curValue) => prevValue + curValue
);
console.log(concatenate);

// Sort
// Try to sort without any arguments, do you get what you'd expect with the words array?

panagram.sort();
console.log(panagram);

//Sort the words in ascending order

const sortedAssendingWords = panagram.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedAssendingWords);

//Sort the words in descending order

const sortedDeSendingWords = panagram.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});

console.log(sortedDeSendingWords);

// Array Methods Challenge Problems
// isPanagram
// Using the following array - test whether each letter a-z (case insensitive) is used at least once

function isPangram(strArr) {
  var resStr = '';
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i in strArr) {
    var tempRes = true;
    for (j in letters) {
      tempRes = tempRes & strArr[i].toLowerCase().includes(letters[i]);
    }
    resStr += tempRes;
  }

  return resStr;
}

console.log(
  isPangram([
    "'The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog'",
    'This is not a pangram',
  ])
);

// Working with data
// filter for products with a price that is less than 10, using the array below:
// sort alphabetically by product name

const products = [
  {
    name: 'allen wrench',
    price: 2.99,
    description: 'handy tool',
  },
  {
    name: 'cornucopia',
    price: 5.99,
    description: 'festive holiday decoration',
  },
  {
    name: 'banana',
    price: 0.99,
    description: 'full of potassium',
  },
  {
    name: 'guillotine (cigar)',
    price: 10.59,
    description: 'behead your stub',
  },
  {
    name: 'jack-o-lantern',
    price: 3.99,
    description: 'spooky seasonal fun',
  },
  {
    name: 'doggie treat (box)',
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: 'egg separator',
    price: 3.99,
    description: 'it separates yolks from whites',
  },
  {
    name: 'LED lightbulb',
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: 'owl pellets',
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: 'flag',
    price: 5.99,
    description: 'catches the breeze',
  },
  {
    name: 'hair brush',
    price: 6.99,
    description: 'fine boar bristles',
  },
  {
    name: 'iridium (one gram)',
    price: 19.36,
    description: 'corrosion-resistant metal',
  },
  {
    name: 'quark',
    price: 0.01,
    description: 'Very small',
  },
  {
    name: 'turtleneck',
    price: 19.99,
    description: 'available in black and slightly-darker black',
  },
  {
    name: 'kaleidoscope',
    price: 8.25,
    description: 'tube with moving plastic pieces inside',
  },
  {
    name: 'mitt (leather)',
    price: 15,
    description: 'regulation sized',
  },
  {
    name: 'nothing',
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: 'violin',
    price: 2000,
    description: 'Talk about a JS fiddle...',
  },
  {
    name: 'yoyo',
    price: 1,
    description: 'We had to pull some strings to get this one in.',
  },
  {
    name: 'pincushion',
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];

// filter for products with a price that is less than 10, using the array below:

// const filteredProducts = products.filter((p) => {
//   if (p.price < 10) {
//     return p.name;
//   }
// });

// console.log(filteredProducts);

const filteredProducts = products.filter((p) => p.price < 10);

console.log(filteredProducts);

//// sort alphabetically by product name

const sortedProduct = filteredProducts.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name === b.name) {
    return 0;
  } else {
    return -1;
  }
});

console.log('Sorted', sortedProduct);
