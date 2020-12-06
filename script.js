const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");


btn.addEventListener("click", function () {
  let hexColorOne = "#";
  let hexColorTwo = "#";
  let hexColorThree = "#";
  let hexColorFour = "#";
  let hexColorFive = "#";

  for (let i = 0; i < 6; i++) {
    hexColorOne += hex[getRandomNumber()];
    hexColorTwo += hex[getRandomNumber()];
    hexColorThree += hex[getRandomNumber()];
    hexColorFour += hex[getRandomNumber()];
    hexColorFive += hex[getRandomNumber()];
  }

  color1.textContent = hexColorOne;
  color2.textContent = hexColorTwo;
  color3.textContent = hexColorThree;
  color4.textContent = hexColorFour;
  color5.textContent = hexColorFive;
  document.querySelector('.div-1').style.backgroundColor = hexColorOne;
  document.querySelector('.div-2').style.backgroundColor = hexColorTwo;
  document.querySelector('.div-3').style.backgroundColor = hexColorThree;
  document.querySelector('.div-4').style.backgroundColor = hexColorFour;
  document.querySelector('.div-5').style.backgroundColor = hexColorFive;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

