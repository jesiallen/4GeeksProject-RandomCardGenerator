/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = ["♦", "♥", "♠", "♣"];
  let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let drawSuit = suit[Math.floor(Math.random() * suit.length)];
  if (drawSuit == "♦" || drawSuit == "♥") {
    document.querySelector(".container-fluid").style.color = "red";
  }

  let drawNumber = number[Math.floor(Math.random() * number.length)];

  document.querySelector(".suitTop").innerHTML = drawSuit;
  document.querySelector(".cardNumber").innerHTML = drawNumber;
  document.querySelector(".suitBottom").innerHTML = drawSuit;
};
