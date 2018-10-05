'use strict';

describe('Feature test:', function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
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

  // it('airport send confirmation message after plane takes off', function(){
  //   plane.land(airport);
  //   plane.takeOff(airport);
  //   expect(airport.takeOffConfirmationMessage()).toHaveBeenCalled();
  // });
});
