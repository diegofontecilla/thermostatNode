'use strict';

function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane){
  if(this._weather.isStormy()) {
    throw new Error('Landing not allowed due to stormy weather');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane){
  if(this._weather.isStormy()){
    throw new Error('Take off not allowed due to stormy weather');
  }
  this._hangar.splice( this._hangar.indexOf(plane), 1);
  this.takeOffConfirmationMessage();
};

Airport.prototype.takeOffConfirmationMessage = function () {
  console.log('The plane has taken off');
};

Airport.prototype.isStormy = function () {
  return false;
};
