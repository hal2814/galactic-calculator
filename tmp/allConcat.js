import { Galactic } from './../js/galactic.js';

$(document).ready(function() {
  $('#galactic-form').submit(function(event) {
    event.preventDefault();
    // let age = $('#age').val();
    let mo = moment("${this.birthday}", "YYYYMMDD").fromNow();
    let age = parseInt(mo[0]+mo[1]);
    console.log("age: "+ age);
    let birthday = $('#birthday').val();
    let newGalactic = new Galactic(age,birthday);
    // $('#output1').text(newGalactic.age);
    $('#output1').text(mo);
    $('#output2').text(newGalactic.birthday);
  });
});

$(document).ready(function(){
  $('#time').text(moment("20111031", "YYYYMMDD").fromNow());
});
