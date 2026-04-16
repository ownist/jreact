function isSame(arr1, arr2) {
  // edge case
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid";

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

const a1 = [1, "4", 4];
const a2 = [1, 4, 4];
const output = isSame(a1, a2);
console.log(output);
