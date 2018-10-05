'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([])
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can instruct plane for take off', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('confirm take off with a message', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.takeOffConfirmationMessage()).toEqual('The plane has taken off');
  });
});
