(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Galactic = exports.Galactic = function () {
  function Galactic(age, birthday) {
    _classCallCheck(this, Galactic);

    this.age = age;
    this.ageInSeconds = 0;
    this.birthday = birthday;
    this.life = 0;
    //.replace(/-|\s/g,"") to remove dashes
  }

  _createClass(Galactic, [{
    key: "convertSeconds",
    value: function convertSeconds() {
      this.ageInSeconds = this.age * 31540000;
      return this.ageInSeconds;
    }
  }, {
    key: "mercuryAge",
    value: function mercuryAge(age) {
      var planetAge = parseFloat((age / 0.24).toFixed(1));
      return planetAge;
    }
  }, {
    key: "venusAge",
    value: function venusAge(age) {
      var planetAge = parseFloat((age / 0.62).toFixed(1));
      return planetAge;
    }
  }, {
    key: "marsAge",
    value: function marsAge(age) {
      var planetAge = parseFloat((age / 1.88).toFixed(1));
      return planetAge;
    }
  }, {
    key: "jupiterAge",
    value: function jupiterAge(age) {
      var planetAge = parseFloat((age / 11.86).toFixed(1));
      return planetAge;
    }
  }, {
    key: "lifeExpectancy",
    value: function lifeExpectancy(cont, smoke) {
      var age = 0;

      if (cont === "North America") {
        age = 81;
      } else if (cont === "South America") {
        age = 79;
      } else if (cont === "Europe") {
        age = 81;
      } else if (cont === "Asia") {
        age = 74;
      } else if (cont === "Africa") {
        age = 64;
      } else if (cont === "Oceania") {
        age = 79;
      }
      if (this.age >= 81) {
        age = this.age + 20;
      }
      if (smoke === "Yes") {
        age -= 10;
      }
      this.life = age;
      return age;
    }
  }]);

  return Galactic;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _galactic = require('./../js/galactic.js');

$(document).ready(function () {
  $('#galactic-form').submit(function (event) {
    event.preventDefault();
    // let age = $('#age').val();
    var birthday = $('#birthday').val();
    var mo = moment(birthday, "YYYY-MM-DD").fromNow();
    var age = parseInt(mo[0] + mo[1]);
    var planet = $('#selectplanet').val();
    var cont = $('#selectContinent').val();
    var smoke = $('#smoke').val();
    console.log("age: " + age + " ,type: " + (typeof age === 'undefined' ? 'undefined' : _typeof(age)));
    console.log("birthday: " + birthday + " ,type: " + (typeof birthday === 'undefined' ? 'undefined' : _typeof(birthday)));

    var newGalactic = new _galactic.Galactic(age, birthday);
    newGalactic.lifeExpectancy(cont, smoke);
    console.log("this.age: " + newGalactic.age + " ,type: " + _typeof(newGalactic.age));
    console.log("newGalactic.birthday: " + newGalactic.birthday + " ,type: " + _typeof(newGalactic.birthday));
    // $('#output1').text(newGalactic.age);
    newGalactic.convertSeconds();
    if (planet === "Earth") {
      $('#output1earth').text(newGalactic.age);
      $('#output2earth').text(newGalactic.ageInSeconds);
      $('#output3earth').text(newGalactic.birthday);
      $('#output4earth').text(newGalactic.life);
      $('#resultEarth').show();
      $('#resultMercury').hide();
      $('#resultVenus').hide();
      $('#resultMars').hide();
      $('#resultJupiter').hide();
    } else if (planet === "Mercury") {
      $('#output1merc').text(newGalactic.mercuryAge(newGalactic.age));
      $('#output3merc').text(newGalactic.birthday);
      $('#output4merc').text(newGalactic.mercuryAge(newGalactic.life));
      $('#resultMercury').show();
      $('#resultVenus').hide();
      $('#resultMars').hide();
      $('#resultJupiter').hide();
      $('#resultEarth').hide();
    } else if (planet === "Venus") {
      $('#output1ven').text(newGalactic.venusAge(newGalactic.age));
      $('#output3ven').text(newGalactic.birthday);
      $('#output4ven').text(newGalactic.venusAge(newGalactic.life));
      $('#resultVenus').show();
      $('#resultMercury').hide();
      $('#resultMars').hide();
      $('#resultJupiter').hide();
      $('#resultEarth').hide();
    } else if (planet === "Mars") {
      $('#output1mars').text(newGalactic.marsAge(newGalactic.age));
      $('#output3mars').text(newGalactic.birthday);
      $('#output4mars').text(newGalactic.marsAge(newGalactic.life));
      $('#resultMars').show();
      $('#resultMercury').hide();
      $('#resultVenus').hide();
      $('#resultJupiter').hide();
      $('#resultEarth').hide();
    } else if (planet === "Jupiter") {
      $('#output1jup').text(newGalactic.jupiterAge(newGalactic.age));
      $('#output3jup').text(newGalactic.birthday);
      $('#output4jup').text(newGalactic.jupiterAge(newGalactic.life));
      $('#resultJupiter').show();
      $('#resultMercury').hide();
      $('#resultVenus').hide();
      $('#resultMars').hide();
      $('#resultEarth').hide();
    }
  });
});

},{"./../js/galactic.js":1}]},{},[2]);
