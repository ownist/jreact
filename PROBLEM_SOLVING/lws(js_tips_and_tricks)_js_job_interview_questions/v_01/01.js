// remove falsy values from any array
let miscellaneous = [
  "apple",
  false,
  "orange",
  NaN,
  0,
  undefined,
  "chili",
  null,
  "",
  "mango",
];

const fruits = miscellaneous.filter(Boolean);
console.log(fruits);

console.log(Boolean(5 < 6));
