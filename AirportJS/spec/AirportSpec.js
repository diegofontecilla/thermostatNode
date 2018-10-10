'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    spyOn(console, 'log');
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([])
  });

describe('Under good weather', function(){
  beforeEach(function(){
    weather.isStormy.and.returnValue(false);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can instruct planes for take off', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('confirm take off printing a message', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(console.log).toHaveBeenCalled();
  });

  it('can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });
});

  describe('Under stormy conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });

    it('does not allow take off', function(){
      var message = 'Take off not allowed due to stormy weather'
      expect(function() { airport.clearForTakeOff(plane) }).toThrowError(message);
    });

    it('does not allow landing', function(){
      var message = 'Landing not allowed due to stormy weather'
      expect(function() { airport.clearForLanding(plane) }).toThrowError(message)
    });
  });
});
