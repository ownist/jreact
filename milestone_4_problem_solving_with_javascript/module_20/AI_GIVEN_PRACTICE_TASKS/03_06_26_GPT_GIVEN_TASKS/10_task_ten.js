/**
 * Longest word বের করো
 *
 * ```js
 * const words = ["apple", "banana", "mango", "watermelon"];
 * ```
 *
 * Task: longest word বের করো।
 *
 * Expected: "watermelon"
 */

const words = ["apple", "banana", "mango", "watermelon"];
let longestWord = words[0];

for (const word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(longestWord);
