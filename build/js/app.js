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
  }

  _createClass(Galactic, [{
    key: "determineAge",
    value: function determineAge() {
      return moment(this.birthday, "YYYY-MM-DD").fromNow();
    }
  }, {
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

var _galactic = require('./../js/galactic.js');

$(document).ready(function () {
  $('#galactic-form').submit(function (event) {
    event.preventDefault();
    var age = $('#age').val();
    var birthday = $('#birthday').val();
    var newGalactic = new _galactic.Galactic(age, birthday);
    $('#output1').text(newGalactic.age);
    $('#output2').text(newGalactic.birthday);
  });
});

},{"./../js/galactic.js":1}]},{},[2]);
