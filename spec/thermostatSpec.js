'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees by default', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('temperature can be increased', function(){

});
});
