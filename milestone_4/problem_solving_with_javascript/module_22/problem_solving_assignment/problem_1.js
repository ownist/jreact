function totalFine(fare) {
  // edge case
  if (typeof fare !== "number" || fare <= 0) return "Invalid";

  return fare + fare * (20 / 100) + 30;
}

const input = "Gorib tai ticket katinai";
const output = totalFine(input);
console.log(output);
