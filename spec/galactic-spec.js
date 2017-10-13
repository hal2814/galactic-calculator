import {Galactic} from './../js/galactic.js';

describe('Galactic', function() {
  let myAge;

  beforeEach(function() {
    myAge = new Galactic(51,1965-10-22);
  });
  it('determines age based on birthdate', function() {
    expect(myAge.determineAge()).toEqual("51 years ago");
  });

  it('converts age in years into age in seconds', function() {
    expect(myAge.convertSeconds()).toEqual(1608540000);
  });

  it('age on planet Mercury', function() {
    expect(myAge.mercuryAge()).toEqual(212.5);
  });

  it('age on planet Venus', function() {
    expect(myAge.venusAge()).toEqual(82.3);
  });

  it('age on planet Mars', function() {
    expect(myAge.marsAge()).toEqual(27.1);
  });

  it('age on planet Jupiter', function() {
    expect(myAge.jupiterAge()).toEqual(4.3);
  });

});
