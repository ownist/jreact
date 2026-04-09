// 1. swaping variable
const array = [1, 2, 3, 4, 5];

// let temp = array[0];
// array[0] = array[4];
// array[4] = temp;

// console.log(array);

// second way: array destructuring
[array[0], array[4]] = [array[4], array[0]];
console.log(array);

// swap variable
let a = 50;
let b = 10;

// [a, b] = [b, a];
// console.log(a, b);

// sobcheye kotin.. math use kore
b = a + (a = b) - b;
console.log(a, b);
// kicchu bujhi nai.. mathar opor diya mohakash e choila geche ei method
