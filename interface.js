$(document).ready(function(){
  let thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);


  $('#choose_city').submit(function(event) {
    event.preventDefault();
    var city = $('#current_city').val();
    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current_temp').text(data.main.temp);
    });
    $.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current_city').text(data.name);
    });
    $.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current_country').text(data.sys.country);
    });
    $('#current_loc').text(city);
  })


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
    alert("You've reset the temperature.")
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
