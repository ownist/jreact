const title = document.getElementById("title");
title.innerText = "only ownist";

// getElementsByClassName
const foreignKhabars = document.getElementsByClassName("foreign");
console.log(foreignKhabars);

for (const e of foreignKhabars) {
  console.log(e);
}
