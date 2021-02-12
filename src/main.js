/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
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
  "red",
  null,
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
  "green"
];

function popBalloon(pos) {
  balloons[pos] = null;
  renderBalloons();
}

function renderBalloons() {
  let content = "";
  balloons.forEach(function(color, position) {
    console.log("Loop " + position + " " + color, content);

    //
    let balloonVisibility = "visibled";
    if (color === null) {
      balloonVisibility = "popped";
    }

    content =
      content +
      `<div 
        class="balloon ${balloonVisibility}"
        style="background: ${color}"
        onClick="popBalloon(${position});">
        </div>`;
  });
  container.innerHTML = content;
}

renderBalloons();
console.log("Hello World on the console!");
