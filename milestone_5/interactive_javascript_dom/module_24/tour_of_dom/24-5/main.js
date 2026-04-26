// innter text
const innerTextOwnist = document.querySelector(".ownist");
console.log(innerTextOwnist.innerText);

console.log("\n");

// innerHTML
const innerhtml = document.querySelector(".innerhtml");
console.log(innerhtml.innerHTML);

console.log("\n");

// get attribute
const getAttr = document.getElementById("getAttr");
console.log(getAttr.getAttribute("href"));

console.log("\n");

// set / remove attr
const setTitle = document.getElementById("setTitle");
setTitle.setAttribute("title", "this is an example attr"); // set attr
setTitle.removeAttribute("id"); // remove attr
console.log(setTitle);

console.log("\n");

// dynamic style
const dyNamicStyle = document.getElementById("dyNamicStyle");
dyNamicStyle.style.backgroundColor = "#2dba4e";
dyNamicStyle.style.padding = "16px 20px";
dyNamicStyle.style.borderRadius = "8px";
console.log(dyNamicStyle);

console.log("\n");

// add class using classlist
const addClass = document.getElementById("addClass");
addClass.classList.add("bg"); // add class
addClass.classList.add("fontColor"); // add class
console.log(addClass);

console.log("\n");

// remove class using classlist
const removeClass = document.getElementById("removeClass");
removeClass.classList.remove("fontColor");
console.log(removeClass); // reove class
