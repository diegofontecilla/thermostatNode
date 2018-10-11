'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.powerSavingMode = true;
  this._temperature = 20;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaximumTemperature()) {
    return;
  }
  this._temperature += 1;
};

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()) {
    return;
  }
  this._temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this._temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSavingModeOn() === false) {
    return this._temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this._temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.resetButton = function () {
  this._temperature = 20;
  this.powerSavingMode = true;  
};
