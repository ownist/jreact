/**
 * Odd number count করো
 *
 * ```js
 * const numbers = [1,2,3,4,5,6,7];
 * ```
 *
 * Task: কয়টা odd number আছে বের করো।
 *
 * Expected: 4
 */

const numbers = [1, 2, 3, 4, 5, 6, 7];
let totalOddNumbers = 0;

numbers.forEach((num) => {
  if (num % 2 === 1) {
    totalOddNumbers++;
  }
});

console.log(totalOddNumbers);

// using filter method
const oddNumbers = numbers.filter((num) => num % 2 !== 0).length;
console.log(oddNumbers);
