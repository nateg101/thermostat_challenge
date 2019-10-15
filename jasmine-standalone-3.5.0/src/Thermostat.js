'use strict';

function Thermostat(){
  this.temperature = 20
}

Thermostat.prototype.getTemp = function(){
  return this.temperature;
}
Thermostat.prototype.up = function(number){
  this.temperature += number;
}
