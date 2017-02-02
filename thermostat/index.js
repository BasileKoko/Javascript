$(document).ready(function(){
  var thermostat = new ThermoStat();


  $('#up').on('click', function(){
    thermostat.up();
    updateTemp();
  })


  $('#savemode_off').on('click', function(){
    thermostat.isPowerSaving == false;
    $('#power_save').text('Power Save: OFF');

  })

  $('#savemode_on').on('click', function(){
     thermostat.isPowerSaving == true;
     $('#power_save').text('Power Save: ON');
  })

  $('#down').on('click', function(){
      thermostat.down();
      updateTemp();
  })

  $('#reset').on('click', function(){
    thermostat.reset();
    updateTemp();

  })

  function updateTemp(){
    $('#current_temp').text('Current Temperature: ' + thermostat.temperature);
    $('#usage').text('Usage: ' + thermostat.usage());
  }


})
