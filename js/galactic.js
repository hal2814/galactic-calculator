export class Galactic{
  constructor(age,birthday){
    this.age = age;
    this.ageInSeconds = 0;
    this.birthday = birthday;
  }

  determineAge (currentTime) {

  }

  convertSeconds () {
    this.ageInSeconds = this.age * 31540000;
    return this.ageInSeconds;
  }

  mercuryAge () {
    let age = this.age * 0.24;
  }

  venusAge () {
    let age = this.age * 0.62;
  }

  marsAge () {
    let age = this.age * 1.88;
  }

  jupiterAge () {
    let age = this.age * 11.86;
  }

  lifeExpectancy () {

  }
}
