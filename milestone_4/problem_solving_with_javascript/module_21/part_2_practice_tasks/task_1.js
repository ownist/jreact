function findLowest(numbers) {
  let lowest = numbers[0];

  for (const n of numbers) {
    if (n < lowest) {
      lowest = n;
    }
  }

  return lowest;
}

const lowest = findLowest([167, 190, 120, 165, 20, 137]);
console.log(lowest);
