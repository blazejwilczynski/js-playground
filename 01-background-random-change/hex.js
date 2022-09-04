const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i=0; i<6; i++) {
    RandomNumberHex2 = Math.floor(Math.random()*hex.length);
    hexColor += hex[RandomNumberHex2];
  }
  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
  color.style.color = hexColor;
});

const getRandomNumberHex = () => {
    return RandomNumberHex = Math.floor(Math.random()*hex.length);
}