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
  "green"
];

balloons.forEach(function(color, i) {
  console.log("Loop " + i + " " + color, content);
  let visible = "";
  if (color === null) visible = "popped";
  content =
    content +
    `<div 
        class="balloon ${visible}"
        style="background: ${color}">
        </div>`;
});

container.innerHTML = content;

console.log("Hello World on the console!");
