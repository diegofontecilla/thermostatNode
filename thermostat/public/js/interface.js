$(document).ready(function(){

  var thermostat;
  $.get('/data', function(res) {
    var data = JSON.parse(res);

    var temperature = parseInt(data['temperature']);
    var powerSavingMode = (data['powerSavingMode'] == 'true');

    thermostat = new Thermostat(powerSavingMode, temperature);

    updateTemperature();
    updatePSM();
  });

  $('#temperature-up').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    updatePSM();
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    updatePSM();
    updateTemperature();
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather'
    var params = { q: city, appid: 'd46acf81288f25a5981e588e1be618ee', units: 'metric' }
    $.get(url, params, function(response) {
      $('#city').text(city);
      $('#current-temperature').text(response.main.temp);
    })
  };

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updatePSM() {
    var psm = (thermostat.powerSavingMode ? 'on' : 'off')
    $('#power-saving-status').text(psm)
  }

  function updateTemperature(){
    $('#thermostat-at').text(thermostat.temperature);
    $('#thermostat-at').attr('class', thermostat.energyUsage());
    $.post('/data', {temperature: thermostat.temperature, powerSavingMode: thermostat.powerSavingMode})
  };
});
