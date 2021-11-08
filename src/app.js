/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "The dog",
  "My grandma",
  "His turtle",
  "My bird",
  "Her Ocelot",
  "The pet tiger",
  "Darth Vader",
  "Macho Man Randy"
];

let action = [
  "ate",
  "peed on",
  "crushed",
  "broke",
  "sat on",
  "tripped on",
  "threw up on",
  "RKOed",
  "headbutted"
];

let what = [
  "my homework",
  "the keys",
  "the car",
  "the router",
  "my books",
  "the hard drive",
  "my hands",
  "my pet parrot"
];

let when = [
  "before the class.",
  "right before I left.",
  "just as I was done with it.",
  "during my lunch break.",
  "after the TV show.",
  "while I was out.",
  "after my nap.",
  "before I went to the store."
];

//Variable for each of the lengths of the arrays, it is the ceiling for the random number generation functions
var who_len = who.length;
var action_len = action.length;
var what_len = what.length;
var when_len = when.length;

//Variable for the random number functions
var rand_who = 0;
var rand_action = 0;
var rand_what = 0;
var rand_when = 0;

//Function that generates a random number for each of the arrays based on the length.
function randoms() {
  rand_who = Math.floor(Math.random() * (who_len - 1) + 1);
  console.log(rand_who);

  rand_action = Math.floor(Math.random() * (action_len - 1) + 1);
  console.log(rand_action);

  rand_what = Math.floor(Math.random() * (what_len - 1) + 1);
  console.log(rand_what);

  rand_when = Math.floor(Math.random() * (when_len - 1) + 1);
  console.log(rand_when);
}

//Concatenates the excuse based on the positions in the arrays generated by the random number generation in the random function.
function excuseGenerator() {
  let mensaje = [
    who[rand_who],
    action[rand_action],
    what[rand_what],
    when[rand_when]
  ].join(" ");
  document.querySelector("#excuse").innerHTML = mensaje;
}

window.onload = randoms();
window.onload = excuseGenerator();
