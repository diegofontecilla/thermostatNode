'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
      plane = new Plane();
      airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff', 'takeOffConfirmationMessage']);
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

  // describe('Under stormy conditions', function(){
  //   it('landing is denied', function(){
  //     spyOn(airport, 'isStormy').and.returnValue(true);
  //     expect(function() { plane.land(airport) }).toThrowError('Take off not allow due to stormy weather');
  //   });
  // });
});
