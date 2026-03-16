function countCharacters(str) {
  const letterCountObj = {};

  for (let i = 0; i <= str.length - 1; i++) {
    const lowerLetter = str[i].toLowerCase();

    letterCountObj[lowerLetter] = (letterCountObj[lowerLetter] || 0) + 1;
  }

  return letterCountObj;
}

const input = "programming";
const output = countCharacters(input);
console.log(output);
