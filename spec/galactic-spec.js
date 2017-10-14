import {Galactic} from './../js/galactic.js';

describe('Galactic', function() {
  let myAge;
  let oldAge;

  beforeEach(function() {
    myAge = new Galactic(51,"1965-10-22");
    oldAge = new Galactic(91,"1925-10-22");
  });
  it('converts age in years into age in seconds', function() {
    expect(myAge.convertSeconds()).toEqual(1608540000);
  });

  it('age on planet Mercury', function() {
    expect(myAge.mercuryAge(myAge.age)).toEqual(212.5);
  });

  it('age on planet Venus', function() {
    expect(myAge.venusAge(myAge.age)).toEqual(82.3);
  });

  it('age on planet Mars', function() {
    expect(myAge.marsAge(myAge.age)).toEqual(27.1);
  });

  it('age on planet Jupiter', function() {
    expect(myAge.jupiterAge(myAge.age)).toEqual(4.3);
  });

  it('life expectancy based on continent and smoke', function() {
    expect(myAge.lifeExpectancy("Asia","Yes")).toEqual(64);
    expect(oldAge.lifeExpectancy("Asia","Yes")).toEqual(101);
  });

});
