/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  renderBalloons();
};

const container = document.querySelector(".container");
let balloons = [
  "pink",
  "black",
  "red",
  "purple",
  "yellow",
  "purple",
  "gold",
  "green",
  "pink",
  "black",
  "red",
  "purple",
  "yellow",
  "purple",
  "gold",
  "green",
  "pink",
  "black",
  "red",
  "purple",
  "yellow",
  "purple",
  "gold",
  "green",
  "pink",
  "black",
  "green",
  "pink"
];

function popBalloon(pos) {
  balloons[pos] = null;
  renderBalloons();
}

const renderBalloons = () => {
  let content = "";
  balloons.forEach((color, position) => {
    content += `<div 
        class="balloon ${color === null ? "popped" : "visibled"}"
        style="background: ${color}">
        </div>`;
  });
  container.innerHTML = content;
  if (content !== "") {
    let allBalloons = document.querySelectorAll(".balloon");
    allBalloons.forEach((singleBalloon, index) => {
      singleBalloon.addEventListener("click", () => popBalloon(index));
    });
  }
};
