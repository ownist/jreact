/**
 * First number > 20 খুঁজে বের করো
 *
 * ```js
 * const numbers = [5, 12, 8, 21, 30];
 * ```
 *
 * Task: find() দিয়ে 20 এর বড় প্রথম number বের করো।
 *
 * Expected: 21
 */

const numbers = [5, 12, 8, 21, 30];
const firstNumberGreaterThanTwenty = numbers.find((num) => num > 20);
console.log(firstNumberGreaterThanTwenty);
