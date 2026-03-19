function groupEvenOdd(arr) {
  const obj = {
    even: [],
    odd: [],
  };

  for (const num of arr) {
    if (typeof num === "number") {
      if (num % 2 === 0) {
        obj.even.push(num);
      } else {
        obj.odd.push(num);
      }
    }
  }

  return obj;
}

const input = [1, "a", 2, null, 3];
const output = groupEvenOdd(input);
console.log(output);
