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
    value: function mercuryAge() {
      var age = parseFloat((this.age / 0.24).toFixed(1));
      return age;
    }
  }, {
    key: "venusAge",
    value: function venusAge() {
      var age = parseFloat((this.age / 0.62).toFixed(1));
      return age;
    }
  }, {
    key: "marsAge",
    value: function marsAge() {
      var age = parseFloat((this.age / 1.88).toFixed(1));
      return age;
    }
  }, {
    key: "jupiterAge",
    value: function jupiterAge() {
      var age = parseFloat((this.age / 11.86).toFixed(1));
      return age;
    }
  }, {
    key: "lifeExpectancy",
    value: function lifeExpectancy() {}
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
    console.log("age: " + age + " ,type: " + (typeof age === 'undefined' ? 'undefined' : _typeof(age)));
    console.log("birthday: " + birthday + " ,type: " + (typeof birthday === 'undefined' ? 'undefined' : _typeof(birthday)));

    var newGalactic = new _galactic.Galactic(age, birthday);
    console.log("this.age: " + newGalactic.age + " ,type: " + _typeof(newGalactic.age));
    console.log("newGalactic.birthday: " + newGalactic.birthday + " ,type: " + _typeof(newGalactic.birthday));
    // $('#output1').text(newGalactic.age);
    newGalactic.convertSeconds();
    if (planet === "Earth") {
      $('#output1').text(newGalactic.age);
      $('#output2').text(newGalactic.ageInSeconds);
      $('#output3').text(newGalactic.birthday);
      $('#resultEarth').toggle();
    } else if (planet === "Mercury") {
      $('#output1').text(newGalactic.mercuryAge());
      $('#output3').text(newGalactic.birthday);
      $('#resultMercury').toggle();
    } else if (planet === "Venus") {
      $('#output1').text(newGalactic.venusAge());
      $('#output3').text(newGalactic.birthday);
      $('#resultVenus').toggle();
    } else if (planet === "Mars") {
      $('#output1').text(newGalactic.marsAge());
      $('#output3').text(newGalactic.birthday);
      $('#resultMars').toggle();
    } else if (planet === "Jupiter") {
      $('#output1').text(newGalactic.jupiterAge());
      $('#output3').text(newGalactic.birthday);
      $('#resultJupiter').toggle();
    }
  });
});

},{"./../js/galactic.js":1}]},{},[2]);
