'use strict';

describe('Feature test:', function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
    });

    it('planes can be instrcuted to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instrcuted for take off from an airport', function(){
      plane.land(airport);
      plane.takeOff(airport);
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('under stormy conditions', function(){
    it('planes cannot take off when is stormy', function(){
      spyOn(Math ,'random').and.returnValues(0, 1);
      plane.land(airport);
      expect(function(){ plane.takeOff(airport);} ).toThrowError('Take off not allowed due to stormy weather');
      expect(airport.planes()).toContain(plane);
    });

    it('planes cannot land when weather is stormy', function(){
      spyOn(Math ,'random').and.returnValue(1);
      expect(function(){ plane.land(airport); } ).toThrowError('Landing not allowed due to stormy weather');
      expect(airport.planes()).toEqual([]);
    });
  });
});
