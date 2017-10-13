import { Galactic } from './../js/galactic.js';

$(document).ready(function() {
  $('#galactic-form').submit(function(event) {
    event.preventDefault();
    // let age = $('#age').val();
    let birthday = $('#birthday').val();
    let mo = moment(birthday, "YYYY-MM-DD").fromNow();
    let age = parseInt(mo[0]+mo[1]);
    console.log("age: "+ age + " ,type: "+ typeof age);
    console.log("birthday: "+ birthday + " ,type: "+typeof birthday);

    let newGalactic = new Galactic(age,birthday);
    console.log("this.age: "+ newGalactic.age + " ,type: "+ typeof newGalactic.age);
    console.log("newGalactic.birthday: "+ newGalactic.birthday + " ,type: "+typeof newGalactic.birthday);
    // $('#output1').text(newGalactic.age);
    newGalactic.convertSeconds();
    $('#output1').text(newGalactic.age);
    $('#output2').text(newGalactic.ageInSeconds);
    $('#output3').text(newGalactic.birthday);
    $('#result').show();
  });
});

$(document).ready(function(){
  $('#time').text(moment("2011-10-31", "YYYY-MM-DD").fromNow());
});
