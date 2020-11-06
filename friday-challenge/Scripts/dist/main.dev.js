"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //class to apply to each morse unit

var SymbolMeaning = function SymbolMeaning(value, meaning) {
  _classCallCheck(this, SymbolMeaning);

  this.value = value;
  this.meaning = meaning;
}; //object of each morse + meaning


var MorseObj = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  " ": "......."
}; //make the h1 innerhtml equal to an empty array 

var display = document.getElementById("disp");
display.innerHTML = [];
var inputVal = document.getElementById('ipt');
var button = document.getElementById("btn"); //button event listener:

button.addEventListener('click', function () {
  var splitInputVal = inputVal.value.split("");
  console.log(splitInputVal);
  splitInputVal.forEach(function (letter) {
    var morseVal = MorseObj[letter];
    display.innerHTML += morseVal;
  });
}); //backwards translating

var RevMorseObj = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".......": " "
}; //make the h1 innerhtml equal to an empty array 

var displayRev = document.getElementById("dispmorse");
displayRev.innerHTML = [];
var inputValMorse = document.getElementById('iptmorse');
var buttonMorse = document.getElementById("btnmorse"); //button event listener:

buttonMorse.addEventListener('click', function () {
  var splitInputVal = inputValMorse.value.split("");
  console.log(splitInputVal);
  splitInputVal.forEach(function (letter) {
    var morseVal = RevMorseObj[letter];
    displayRev.innerHTML += morseVal;
  });
});