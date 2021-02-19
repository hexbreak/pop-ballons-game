/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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
  console.log(balloons[pos]);
  renderBalloons();
}

function renderBalloons() {
  let content = "";
  balloons.forEach(function(color, position) {
    // console.log("Loop " + position + " " + color, content);

    //
    let balloonVisibility = "visibled";
    if (color === null) {
      balloonVisibility = "popped";
    }

    content += `<div 
        class="balloon ${balloonVisibility}"
        style="background: ${color}"
        onClick="popBalloon(${position});">
        </div>`;
  });
  container.innerHTML = content;
}
renderBalloons();
