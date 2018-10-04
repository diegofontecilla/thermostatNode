'use strict';

describe('Feature test:', function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('#instruct landing', function() {
    it('planes can be instrcuted to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
  });
});
