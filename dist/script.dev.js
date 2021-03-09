"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
var cities = [];
fetch(endpoint).then(function (blob) {
  return blob.json();
}).then(function (data) {
  return cities.push.apply(cities, _toConsumableArray(data));
});

function findMatches(wordToMatch, cities) {
  return cities.filter(function (place) {
    var regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
} // const displayMatches = () => {
//     console.log(this.value);
// } ne radi sa ovim izrazom


function displayMatches() {
  var matchArray = findMatches(this.value, cities);
  console.log(matchArray);
}

var input = document.querySelector(".search");
var suggestions = document.querySelector(".suggestions"); // input.addEventListener('change', displayMatches);

input.addEventListener('keyup', displayMatches);