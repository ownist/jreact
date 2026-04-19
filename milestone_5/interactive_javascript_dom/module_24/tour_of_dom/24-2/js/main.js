const liCollections = document.getElementsByTagName("li");
console.log(liCollections);

// loop html collections
for (const li of liCollections) {
  console.log(li.innerText);
}

console.log("\n"); // new line

// all h1 tags
const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  console.log(h1);
  console.log(h1.innerText);
}
