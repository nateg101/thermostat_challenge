'use strict';

function Thermostat(){
  this.temperature = 20
  this.MIN_TEMP = 10
}

Thermostat.prototype.getTemp = function(){
  return this.temperature;
}
Thermostat.prototype.up = function(){
  this.temperature += 1;
}

Thermostat.prototype.down = function(){
  if (this.isMIN_TEMP()){
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMIN_TEMP = function(){
  return this.temperature === this.MIN_TEMP;
}
