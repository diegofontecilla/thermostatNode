'use strict';

describe('Plane', function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
      plane = new Plane();
      airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff', 'takeOffConfirmationMessage']);
      weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function(){
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });

  describe('Under stormy conditions', function(){

    it('landing is denied', function(){
      weather.isStormy.and.returnValue(true)
      plane.land(airport);
      expect(this._location).not.toEqual(airport);
    });

    it('take off is denied', function(){
      weather.isStormy.and.returnValues(false, true);
      plane.land(airport);
      plane.takeOff();
      expect(plane._location).toEqual(airport);
    });
  });
});
