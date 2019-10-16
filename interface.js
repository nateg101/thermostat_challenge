$(document).ready(function(){
  let thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#temp_up').click(function(){
    thermostat.up();
    updateTemp();
  })

  $('#temp_down').click(function(){
    thermostat.down();
    updateTemp();
  })

  $('#reset').click(function(){
    thermostat.reset();
    updateTemp();
  })

  $('#power_save_on').click(function(){
    thermostat.powerSaverOn();
    $('#power_save_status').text('On')
    updateTemp();
  })

  $('#power_save_off').click(function(){
    thermostat.powerSaverOff();
    $('#power_save_status').text('Off');
    updateTemp();
  })

  function updateTemp(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUse());
  }
})
