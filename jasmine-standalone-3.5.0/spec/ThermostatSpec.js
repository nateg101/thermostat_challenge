'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should initialize at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it("can increase the temperature with an 'up' function", function(){
    thermostat.up()
    expect(thermostat.getTemp()).toEqual(21)
  });

  it("can decrease the temperature with a 'down' function", function(){
    thermostat.down()
    expect(thermostat.getTemp()).toEqual(19)
  });

  describe("power saver mode", function(){
    it("starts with power saver mode on", function(){
      expect(thermostat.isPowerSaver()).toBe(true)
    });
    it("can switch power saver mode off", function(){
      thermostat.powerSaverOff();
      expect(thermostat.isPowerSaver()).toBe(false)
    });
    it("can switch power saver mode on", function(){
      thermostat.powerSaverOff();
      thermostat.powerSaverOn();
      expect(thermostat.isPowerSaver()).toBe(true)
    });
  });

  describe("Temperature limits",function(){
    it("stops the temperature going below 10",function(){
      for (var i = 0; i < 11; i++){
      thermostat.down();
      }
      expect(thermostat.getTemp()).toEqual(10)
    });
    it("has a max temperature of 32 with the power saver off", function(){
      thermostat.powerSaverOff();
      for (var i = 0; i < 15; i++){
      thermostat.up();
      }
      expect(thermostat.getTemp()).toEqual(32)
    });
    it("has a max temperature of 25 with the power saver on", function(){
      thermostat.saverOn
      for (var i = 0; i < 6; i++){
      thermostat.up();
      }
      expect(thermostat.getTemp()).toEqual(25)
    });
  });

  describe("Reset function",function(){
    it("can reset the temperate from a higher temp", function(){
      thermostat.up();
      thermostat.reset();
      expect(thermostat.getTemp()).toEqual(20)
    })
    it("can reset the temperate from a lower temp", function(){
      thermostat.down();
      thermostat.reset();
      expect(thermostat.getTemp()).toEqual(20)
    })
  })
});
