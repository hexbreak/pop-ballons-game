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
let balloons = ["pink", "black", "red", "purple"];

balloons.forEach(function(color, i) {
  console.log("Loop " + i + " " + color, content);
  content =
    content +
    `<div 
        class="balloon"
        style="background: ${color}">
        </div>`;
});

container.innerHTML = content;

console.log("Hello World on the console!");
