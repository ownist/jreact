const parent = document.getElementById("parent");

// create element
const div = document.createElement("div");
const h1 = document.createElement("h1");
const ol = document.createElement("ol");
const li = document.createElement("li");

// set inner text
h1.innerText = "Teams";
li.innerText = "ownist";

// append to the parent
div.appendChild(h1);
ol.appendChild(li);
div.appendChild(ol);
parent.appendChild(div);
