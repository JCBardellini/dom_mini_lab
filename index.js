const h1Element = document.querySelector("h1");
h1Element.textContent = "Dom Mini-Lab";
const hideElement = document.querySelector("#hide");
const unhideElement = document.querySelector("#unhide");
const btn = document.querySelectorAll("button");
hideElement.addEventListener("click", () => {
  h1Element.style.display = "none";
});
unhideElement.addEventListener("click", () => {
  h1Element.style.display = "block"; // or use removeProperty("display") instead of style property
});

// let hiddenButton = true;

// const btnFunction = () => {
//   if (!hiddenButton) {
//     hiddenButton = true;
//     h1Element.style.display = "none";
//   } else {
//     hiddenButton = false;
//     h1Element.style.display = "block";
//   }
// }; // stuck, will research later
// btn.addEventListener("click", btnFunction);
