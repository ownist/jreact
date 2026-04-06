/**
 * author: ownist
 */

function getMostFrequentCategory(items) {
  // edge case: jodi empty array hoy
  if (items.length === 0) {
    return null;
  }

  const categoryObj = {};
  let maxCount = 0;
  let resultCategory = null;

  // loop array
  for (const item of items) {
    // edge case: inavild data skip
    if (typeof item.category !== "string") continue;

    const category = item.category;

    categoryObj[category] = (categoryObj[category] || 0) + 1;
  }

  for (const key in categoryObj) {
    if (categoryObj[key] > maxCount) {
      maxCount = categoryObj[key];
      resultCategory = key;
    }
  }

  return resultCategory;
}

const input = [
  { name: "A", category: "Fruit" },
  { name: "B" },
  { name: "C", category: 123 },
  { name: "D", category: "Fruit" },
];
const output = getMostFrequentCategory(input);
console.log(output);
