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

  it('maximum temperature limit is 32 degrees', function(){
    for (var i = 1; i < 19; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('minimum temperature limit is 10 degrees', function(){
    for (var i = 1; i < 12; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('checks if temperature is set to minumum temperature', function(){
    expect(thermostat.isMinimumTemperature()).toBe(false);
  });

  it('checks if temperature is set to maximum temperature', function(){
    expect(thermostat.isMaximumTemperature()).toBe(false)
  });
});
