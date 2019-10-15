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

  function updateTemp(){
    $('#temperature').text(thermostat.temperature);
  }
})
