const rachelkaka = 80;
const jihadkaka = 50;
const tomjidkaka = 40;

if (rachelkaka > jihadkaka && rachelkaka > tomjidkaka) {
  console.log("rachel kaka boro");
} else if (jihadkaka > rachelkaka && jihadkaka > tomjidkaka) {
  console.log("jihadkaka boro");
} else {
  console.log("tomjid kaka boro");
}

// using function
function getMaxNum(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}

const nums = getMaxNum(25, 45, 82);
console.log(nums);

// using simple method Math.max()
const maxNum = Math.max(15, 25, 87, 92);
console.log(maxNum);
