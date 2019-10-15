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

  describe("Temperature limits",function(){
    it("stops the temperature going below 10",function(){
      for (var i = 0; i < 11; i++){
      thermostat.down();
      }
      expect(thermostat.getTemp()).toEqual(10)
    })
  });
});
