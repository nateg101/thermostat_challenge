'use strict';

function Thermostat(){
  this.temperature = 20
  this.MIN_TEMP = 10
  this.MAX_TEMP = 32
  this.powerSaver = true
}

Thermostat.prototype.isPowerSaver = function(){
  return this.powerSaver;
}

Thermostat.prototype.powerSaverOff = function(){
  this.powerSaver = false;
}

Thermostat.prototype.powerSaverOn = function(){
  this.powerSaver = true;
}

Thermostat.prototype.getTemp = function(){
  return this.temperature;
}

Thermostat.prototype.up = function(){
  if (this.isMAX_TEMP()){
    return;
  }
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

Thermostat.prototype.isMAX_TEMP = function(){
  return this.temperature === this.MAX_TEMP;
}
