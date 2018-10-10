'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees by default', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increase in temperature with up()', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decrease in temperature with down()', function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
});
