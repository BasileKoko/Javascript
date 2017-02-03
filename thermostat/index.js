$(document).ready(function(){
  var thermostat = new ThermoStat();


function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=328027edea9c06b5a045e1c74546dbe0';
 var units = '&units=metric';

 $.get(url + token + units, function(data) {
   $("#" + city + "").html(data.name + ' '+ data.main.temp + '°C ' + data.weather[0].description + "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
  })
}

displayWeather('London');
displayWeather('Abidjan')
displayWeather('Havana')

function submitWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=328027edea9c06b5a045e1c74546dbe0';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
 $('#current-temperature').html(data.name + ' '+ data.main.temp + '°C ' + data.weather[0].description + "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
})
}

 $('#select-city').submit(function(event) {
   event.preventDefault();
   var city = $('#current-city').val();
   submitWeather(city);
 })





  $('#up').on('click', function(){
    thermostat.isPowerSaving;
    thermostat.up();
    updateTemp();
  })


  $('#savemode_off').on('click', function(){
    thermostat.isPowerSaving = false;
    $('#power_save').text('Power Save: OFF');

  })

  $('#savemode_on').on('click', function(){
     thermostat.isPowerSaving = true;
     $('#power_save').text('Power Save: ON');
  })

  $('#down').on('click', function(){
    thermostat.isPowerSaving;
    thermostat.down();
    updateTemp();
  })

  $('#reset').on('click', function(){
    thermostat.reset();
    updateTemp();

  })

  function updateTemp(){
    $('#current_temp').text('Temperature: ' + thermostat.temperature + ' °C');
    $('#usage').text('usage: ' + thermostat.usage());
    $('#usage').attr('class', thermostat.usage());
  }


})
