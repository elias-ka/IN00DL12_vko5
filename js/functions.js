"use strict";

function roll() {
  const rand = Math.floor(Math.random() * 6) + 1;
  const img = `img/${rand}.png`;
  document.querySelector("#dice img").src = img;
}

document.getElementById("dice").addEventListener("click", roll);
