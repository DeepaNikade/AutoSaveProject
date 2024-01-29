const thetextArea1 = document.getElementById("thetextArea");

function addtextToLocal() {
  localStorage.setItem("savedText", thetextArea1.value);
}

if (localStorage.getItem("savedText")) {
  thetextArea1.value = localStorage.getItem("savedText");
}

thetextArea1.addEventListener("input", addtextToLocal);

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
let h1 = document.querySelector("h1");

modebtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.style.backgroundColor = "black";
    h1.style.color = "white";
  } else {
    currMode = "light";
    body.style.backgroundColor = "white";
    h1.style.color = "black";
  }
});
