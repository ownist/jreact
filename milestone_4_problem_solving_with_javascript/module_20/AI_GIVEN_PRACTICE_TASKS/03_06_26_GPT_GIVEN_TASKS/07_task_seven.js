/**
 * Array এর total বের করো
 *
 * ```js
 * const numbers = [5, 10, 15, 20];
 * ```
 *
 * Task: loop বা reduce() দিয়ে total sum বের করো।
 *
 * Expected: 50
 */

const numbers = [5, 10, 15, 20];
let totalSum = 0;

for (const num of numbers) {
  totalSum += num;
}

console.log(totalSum);
