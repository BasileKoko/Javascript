'use strict';
var thermostat;
var temperature;

describe('thermostat',function(){
  var defaultTemp

  beforeEach(function(){
    thermostat = new ThermoStat;
    defaultTemp = thermostat._START_TEMP;
  });

  describe('start with default temperature', function(){
    it('starts at default',function(){
      expect(thermostat.temperature).toEqual(defaultTemp);
    });
  });

  describe('#isPowerSaving',function(){
    it('starts with power saving on', function(){
      expect(thermostat.isPowerSaving).toEqual(true);
    });
  });

  describe('#up', function(){
    it('increases temperature', function(){
      thermostat.temperature = defaultTemp;
      thermostat.up();
      expect(thermostat.temperature).toEqual(defaultTemp + 1);
    });
    describe('with power save on',function(){
      it('won\'t go above max temp',function (){
        var defaultMax = thermostat._MAX_TEMP_SAVING;
        thermostat.temperature = defaultMax;
        thermostat.up();
        expect(thermostat.temperature).toEqual(defaultMax);
      });
    });
    describe('with power save off',function(){
      it('won\'t go above max temp',function (){
        var defaultMax = thermostat._MAX_TEMP_NO_SAVE;
        thermostat.temperature = defaultMax;
        thermostat.up();
        expect(thermostat.temperature).toEqual(defaultMax);
      });
    });
  });

  describe('#down', function(){
    it('decreases temperature', function(){
      thermostat.temperature = defaultTemp;
      thermostat.down();
      expect(thermostat.temperature).toEqual(defaultTemp - 1);
    });

    it('has a minimum temperature', function(){
      var defaultMin = thermostat._MIN_TEMP;
      thermostat.temperature = defaultMin;
      thermostat.down();
      expect(thermostat.temperature).toEqual(defaultMin);
    });
  });

  describe('#_max_temp', function(){
    it ('returns MAX_TEMP_SAVING if power saving is on', function(){
      expect(thermostat._maxTemp()).toEqual(thermostat._MAX_TEMP_SAVING);
    });
    it ('returns MAX_TEMP_NO_SAVE if power saving is off', function(){
      thermostat.isPowerSaving = false;
      expect(thermostat._maxTemp()).toEqual(thermostat._MAX_TEMP_NO_SAVE);
    });
  });

  describe('reset', function(){
    it('returns START_TEMP', function(){
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(defaultTemp);
    });
  });

  describe('energy usage', function(){
    it('returns low usage', function(){
      thermostat.temperature = thermostat._MIN_TEMP
      expect(thermostat.usage()).toBe('low-usage');
    });

    it('returns medium-usage', function(){
      expect(thermostat.usage()).toBe('medium-usage');
    });

    it('return high-usage', function(){
      thermostat.temperature = thermostat._MAX_TEMP_SAVING;
      expect(thermostat.usage()).toBe('high-usage');
    });

  });
});
