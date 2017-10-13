export class Galactic{
  constructor(age,birthday){
    this.age = age;
    this.ageInSeconds = 0;
    this.birthday = birthday.replace(/-|\s/g,"");
  }

  determineAge () {
    return moment(this.birthday, "YYYYMMDD").fromNow();
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

  lifeExpectancy () {

  }
}
