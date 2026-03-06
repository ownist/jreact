/**
 * Array এর সব number double করো
 *
 * ```js
 * const numbers = [2, 4, 6, 8];
 * ```
 *
 * Task: map() ব্যবহার করে সব number double করো।
 *
 * Expected:
 * ```md
 * [4, 8, 12, 16]
 * ```
 */

const numbers = [2, 4, 6, 8];
const doubleNum = numbers.map((num) => num * 2);
console.log(doubleNum);
