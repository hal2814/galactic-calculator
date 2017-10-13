import { Galactic } from './../js/galactic.js';

$(document).ready(function() {
  $('#galactic-form').submit(function(event) {
    event.preventDefault();
    // let age = $('#age').val();
    let birthday = $('#birthday').val();
    let mo = moment(birthday, "YYYY-MM-DD").fromNow();
    let age = parseInt(mo[0]+mo[1]);
    let planet = $('#selectplanet').val();
    let cont = $('#selectContinent').val();
    let smoke = $('#smoke').val();
    console.log("age: "+ age + " ,type: "+ typeof age);
    console.log("birthday: "+ birthday + " ,type: "+typeof birthday);

    let newGalactic = new Galactic(age,birthday);
    newGalactic.lifeExpectancy(cont,smoke);
    console.log("this.age: "+ newGalactic.age + " ,type: "+ typeof newGalactic.age);
    console.log("newGalactic.birthday: "+ newGalactic.birthday + " ,type: "+typeof newGalactic.birthday);
    // $('#output1').text(newGalactic.age);
    newGalactic.convertSeconds();
    if(planet === "Earth"){
      $('#output1earth').text(newGalactic.age);
      $('#output2earth').text(newGalactic.ageInSeconds);
      $('#output3earth').text(newGalactic.birthday);
      $('#output4earth').text(newGalactic.life);
      $('#resultEarth').show();
      $('#resultMercury').hide();
      $('#resultVenus').hide();
      $('#resultMars').hide();
      $('#resultJupiter').hide();
    }
    else if(planet === "Mercury"){
      $('#output1merc').text(newGalactic.mercuryAge());
      $('#output3merc').text(newGalactic.birthday);
      $('#output4merc').text(newGalactic.life);
      $('#resultMercury').show();
      $('#resultVenus').hide();
      $('#resultMars').hide();
      $('#resultJupiter').hide();
      $('#resultEarth').hide();
    }
    else if(planet === "Venus"){
      $('#output1ven').text(newGalactic.venusAge());
      $('#output3ven').text(newGalactic.birthday);
      $('#resultVenus').show();
      $('#resultMercury').hide();
      $('#resultMars').hide();
      $('#resultJupiter').hide();
      $('#resultEarth').hide();
    }
    else if(planet === "Mars"){
      $('#output1mars').text(newGalactic.marsAge());
      $('#output3mars').text(newGalactic.birthday);
      $('#resultMars').show();
      $('#resultMercury').hide();
      $('#resultVenus').hide();
      $('#resultJupiter').hide();
      $('#resultEarth').hide();
    }
    else if(planet === "Jupiter"){
      $('#output1jup').text(newGalactic.jupiterAge());
      $('#output3jup').text(newGalactic.birthday);
      $('#resultJupiter').show();
      $('#resultMercury').hide();
      $('#resultVenus').hide();
      $('#resultMars').hide();
      $('#resultEarth').hide();
    }
  });
});
