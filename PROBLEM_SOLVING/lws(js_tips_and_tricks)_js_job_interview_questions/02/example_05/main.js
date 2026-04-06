// remove duplicate from an array

const array = [1, 2, 3, 2, 2, 4, 5, 6, 3, 5, 3, 4];

// in my case
const uniqueArray = [];

for (const n of array) {
  if (!uniqueArray.includes(n)) {
    uniqueArray.push(n);
  }
}

console.log(uniqueArray);

/**
 * in one line of code: from lws using set method
 */
console.log([...new Set(array)]);
