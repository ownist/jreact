function cashOut(money) {
  // edge case
  if (typeof money !== "number" || money < 0) return "Invalid";

  return (money * 1.75) / 100;
}

const input = 2000;
const output = cashOut(input);
console.log(output);
