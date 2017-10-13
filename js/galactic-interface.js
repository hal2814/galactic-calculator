import { Galactic } from './../js/galactic.js';

$(document).ready(function() {
  $('#galactic-form').submit(function(event) {
    event.preventDefault();
    // let age = $('#age').val();
    let birthday = $('#birthday').val();
    let mo = moment(birthday, "YYYY-MM-DD").fromNow();
    let age = parseInt(mo[0]+mo[1]);
    console.log("age: "+ age);
    console.log("birthday: "+ birthday + " ,type: "+typeof birthday);
    let newGalactic = new Galactic(age,birthday);
    // $('#output1').text(newGalactic.age);
    $('#output1').text(age);
    $('#output2').text(newGalactic.birthday);
  });
});
