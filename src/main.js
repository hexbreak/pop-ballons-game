/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

const container = document.querySelector(".container");
let content = "";
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

function popBaloon(position) {
  ballons[position] = null;
}

balloons.forEach(function(color, location) {
  console.log("Loop " + location + " " + color, content);
  let visible = "";
  if (color === null) {
    visible = "popped";
  }
  content =
    content +
    `<div 
        class="balloon ${visible}"
        style="background: ${color}"
        onClick="popBalloon(${location});">
        </div>`;
});

container.innerHTML = content;

console.log("Hello World on the console!");
