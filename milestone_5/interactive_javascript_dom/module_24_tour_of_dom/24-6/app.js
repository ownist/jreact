const playersContainer = document.getElementById("playersContainer");
console.log(playersContainer.innerText);

const sections = document.querySelectorAll("section");
// for of loop on nodelist
for (const sec of sections) {
  sec.style.backgroundColor = "#2dba4e";
  sec.style.padding = "16px 20px";
  sec.style.margin = "20px 0";
  sec.style.borderRadius = "8px";
}
