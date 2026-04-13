/**
 * Write a function to find the longest word in a given string.
 *
 * sample-input: I am learning Programming to become a programmer
 *
 * sample-output: Programming
 */

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const input = "I am learning Programming to become a programmer";
const output = findLongestWord(input);
console.log(output);
