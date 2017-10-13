export class Galactic{
  constructor(age,birthday){
    this.age = age;
    this.ageInSeconds = 0;
    this.birthday = birthday;
    this.life = 0;
    //.replace(/-|\s/g,"") to remove dashes
  }
  convertSeconds () {
    this.ageInSeconds = this.age * 31540000;
    return this.ageInSeconds;
  }

  mercuryAge () {
    let age = parseFloat((this.age / 0.24).toFixed(1));
    return age;
  }

  venusAge () {
    let age = parseFloat((this.age / 0.62).toFixed(1));
    return age;
  }

  marsAge () {
    let age = parseFloat((this.age / 1.88).toFixed(1));
    return age;
  }

  jupiterAge () {
    let age = parseFloat((this.age / 11.86).toFixed(1));
    return age;
  }

  lifeExpectancy (cont, smoke) {
    let age = 0;
    if (cont === "North America"){
      age = 81;
    }
    else if (cont === "South America"){
      age = 79;
    }
    else if (cont === "Europe"){
      age = 81;
    }
    else if (cont === "Asia"){
      age = 74;
    }
    else if (cont === "Africa"){
      age = 64;
    }
    else if (cont === "Oceania"){
      age = 79;
    }
    if(smoke === "Yes"){
      age -= 10;
    }
    this.life = age;
    return age;
  }
}
