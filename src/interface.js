$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function(){
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temp-down').click(function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temp-reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').click(function(){
    thermostat.powerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  });

  $('#psm-off').click(function(){
    thermostat.powerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=d46acf81288f25a5981e588e1be618ee';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  };

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d46acf81288f25a5981e588e1be618ee&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=d46acf81288f25a5981e588e1be618ee&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});
