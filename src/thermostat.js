'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.SAVE_MODE_TEMPERATURE = 25;
  this._temperature = 20;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaximumTemperature()) {
    return;
  }
  return this._temperature += 1;
};

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()) {
    return;
  }
  return this._temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this._temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function(){
  return this._temperature === this.MAXIMUM_TEMPERATURE;
};
