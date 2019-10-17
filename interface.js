$(document).ready(function(){
  let thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#choose_city').submit(function(event) {
    event.preventDefault();
    showWeather($('#current_city').val())
  })

  function showWeather(city) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city;
    let apiToken = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    let units = '&units=metric'
    $.get(url + apiToken + units, function(data) {
      $('#current_temp').text(data.main.temp);
      $('#current_country').text(data.sys.country);
      $('#current_loc').text(data.name);
    })
  }

  $('#temp_up').click(function(){
    thermostat.up();
    updateTemp();
    sendState();
  })

  $('#temp_down').click(function(){
    thermostat.down();
    updateTemp();
    sendState();
  })

  $('#reset').click(function(){
    thermostat.reset();
    updateTemp();
    alert("You've reset the temperature.")
    sendState();
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

  $.get('http://localhost:4567/update', function(data) {
    thermostat.temperature = Number(data)
    console.log(data)
    $('#temperature').text(thermostat.temperature);
  });

  function sendState() {
    var send = {temperature: thermostat.temperature}
    $.post('http://localhost:4567/retrieve', send);
  };

})
