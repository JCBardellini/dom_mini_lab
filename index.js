const h1Element = document.querySelector("h1");
h1Element.textContent = "Dom Mini-Lab";
const hideElement = document.querySelector("#hide");
const unhideElement = document.querySelector("#unhide");

hideElement.addEventListener("click", () => {
  h1Element.style.display = "none";
});
unhideElement.addEventListener("click", () => {
  h1Element.style.display = "block"; // or use removeProperty("display") instead of style property
});
