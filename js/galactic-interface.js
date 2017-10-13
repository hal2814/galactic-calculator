import { Galactic } from './../js/galactic.js';

$(document).ready(function() {
  $('#galactic-form').submit(function(event) {
    event.preventDefault();
    // let age = $('#age').val();
    let birthday = $('#birthday').val();
    let mo = moment(birthday, "YYYY-MM-DD").fromNow();
    let age = parseInt(mo[0]+mo[1]);
    let planet = $('#selectplanet').val();
    console.log("age: "+ age + " ,type: "+ typeof age);
    console.log("birthday: "+ birthday + " ,type: "+typeof birthday);

    let newGalactic = new Galactic(age,birthday);
    console.log("this.age: "+ newGalactic.age + " ,type: "+ typeof newGalactic.age);
    console.log("newGalactic.birthday: "+ newGalactic.birthday + " ,type: "+typeof newGalactic.birthday);
    // $('#output1').text(newGalactic.age);
    newGalactic.convertSeconds();
    if(planet === "Earth"){
      $('#output1').text(newGalactic.age);
      $('#output2').text(newGalactic.ageInSeconds);
      $('#output3').text(newGalactic.birthday);
      $('#resultEarth').toggle();
    }
    else if(planet === "Mercury"){
      $('#output1').text(newGalactic.mercuryAge());
      $('#output3').text(newGalactic.birthday);
      $('#resultMercury').toggle();
    }
    else if(planet === "Venus"){
      $('#output1').text(newGalactic.venusAge());
      $('#output3').text(newGalactic.birthday);
      $('#resultVenus').toggle();
    }
    else if(planet === "Mars"){
      $('#output1').text(newGalactic.marsAge());
      $('#output3').text(newGalactic.birthday);
      $('#resultMars').toggle();
    }
    else if(planet === "Jupiter"){
      $('#output1').text(newGalactic.jupiterAge());
      $('#output3').text(newGalactic.birthday);
      $('#resultJupiter').toggle();
    }
  });
});
