import { Galactic } from './../js/galactic.js';

$(document).ready(function() {
  $('#galactic-form').submit(function(event) {
    event.preventDefault();
    let age = $('#age').val();
    let birthday = $('#birthday').val();
    let newGalactic = new Galactic(age,birthday);
    $('#output1').text(newGalactic.age);
    $('#output2').text(newGalactic.birthday);
  });
});
