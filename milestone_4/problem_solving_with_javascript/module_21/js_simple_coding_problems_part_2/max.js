const disha = 65;
const salman = 55;

if (disha > salman) {
  console.log("disha will get the pen");
} else {
  console.log("salman will get the pen");
}

// inside a function
function getMax(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

const max = getMax(96, 85);
console.log(`${max} is bigger`);
