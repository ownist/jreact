/**
 * author: ownist
 *
 * recap day 15 problem
 */

function findFirstNonRepeating(str) {
  // edge case: jodi empty string hoy tahole null return korbe
  if (str.length === 0) {
    return null;
  }

  // create an object for frequency count
  const str_frequency = {};

  for (const letter of str) {
    str_frequency[letter] = (str_frequency[letter] || 0) + 1;
  }

  // loop using string value bcz object index onujayi ulot palot hoite pare but use er dewa string onujayi object er sathe compare korle ekdom nirvul code hbe
  for (const char of str) {
    // ekhon string er value diye object er property access kortesi
    if (str_frequency[char] === 1) {
      return char;
    }
  }

  // edge case: jodi kono value 1 bar o na pay tahole null return korbe
  return null;
}

const input = "shahed";
const output = findFirstNonRepeating(input);
console.log(output);
