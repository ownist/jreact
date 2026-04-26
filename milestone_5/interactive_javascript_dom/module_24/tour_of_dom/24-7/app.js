const sections = document.querySelectorAll("section");
// for of loop on nodelist
for (const sec of sections) {
  sec.style.backgroundColor = "#2dba4e";
  sec.style.padding = "16px 20px";
  sec.style.margin = "20px 0";
  sec.style.borderRadius = "8px";
}

const playersContainer = document.getElementById("playersContainer");
console.log(
  playersContainer.childNodes[3].childNodes[7].parentNode.parentNode.parentNode
    .parentNode.parentNode,
);

const parent = document.getElementById("parent");
console.log(parent);

const li = document.createElement("li");
li.innerText = "Yamal";

parent.appendChild(li);
