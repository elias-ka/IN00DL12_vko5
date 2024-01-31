"use strict";

function roll() {
  const rand = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice_img").src = `img/${rand}.png`;
}

document.getElementById("dice_img").addEventListener("click", roll);
