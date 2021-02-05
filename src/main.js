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

balloons.forEach(function() {
  content += "";
});

container.innerHTML = "Hello World";

console.log("Hello World on the console!");
