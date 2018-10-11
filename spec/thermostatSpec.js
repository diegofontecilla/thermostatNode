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

  it('has reset button that reset to default temperature', function(){
    for(var i = 0; i < 4; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('when PSM is on', function(){
    it('25 is maximum temperature limit', function(){
      for(var i = 1; i < 7; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('can switch PSM off', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('has power saving mode on by default', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('when PSM is off', function(){
    it('maximum temperature limit is 32', function(){
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

    it('can switch PSM on when is off', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

describe('display usage level', function(){
    it('when temperature is under 18 tells you that is in low usage', function(){
      for(var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('when temperature is under 25 tells you that is in medium usage', function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('when temperature is at and over 25 tells you that is in high usage', function(){
      for(var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
