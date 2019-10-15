'use strict';

function Thermostat(){
  this.temperature = 20
  this.MIN_TEMP = 10
  this.MAX_TEMP_SAVE_OFF = 32
  this.MAX_TEMP_SAVE_ON = 25
  this.powerSaver = true
}

Thermostat.prototype.reset = function(){
  this.temperature = 20;
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
  if (this.isPowerSaver()) {
    return this.temperature === this.MAX_TEMP_SAVE_ON;
  }
  return this.temperature === this.MAX_TEMP_SAVE_OFF;
}

Thermostat.prototype.energyUse = function(){
  if (this.temperature < 18){
    return 'low';}
  else if (this.temperature > 25){
    return 'high';}
  else {return 'medium';}
}
