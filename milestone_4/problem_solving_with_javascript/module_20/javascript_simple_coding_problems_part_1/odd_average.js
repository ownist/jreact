function oddAvg(arr) {
  let oddNums = [];
  let oddSum = 0;

  for (const n of arr) {
    if (n % 2 !== 0) {
      oddNums.push(n);
    }
  }

  for (const n of oddNums) {
    oddSum += n;
  }

  return (oddSum / oddNums.length).toFixed(2);
}

console.log(oddAvg([1, 3, 2, 5, 7, 6]));
