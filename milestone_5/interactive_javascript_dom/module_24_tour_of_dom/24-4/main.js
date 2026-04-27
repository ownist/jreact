// quesry selector all and query selector

const querySelecAll = document.querySelectorAll("#sec span");
console.log(querySelecAll);
for (const el of querySelecAll) {
  console.log(el.innerText);
}

console.log("\n"); // an empty line

const firstElm = document.querySelector("#sec span");
console.log(firstElm);

/**
 * querySelectorAll ekta nodelist dei / jodi kono element na pai thaole empty ekta nodelist dei
 * and querySelector sudhu matro first element tai dei / jodi kono element na pay tahole null return kore
 */
