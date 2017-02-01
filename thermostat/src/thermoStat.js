'use strict';
function ThermoStat(){
  this._START_TEMP = 20;
  this._MIN_TEMP = 10;
  this._MAX_TEMP_NO_SAVE = 32;
  this._MAX_TEMP_SAVING = 25;
  this.temperature = this._START_TEMP;
  this.isPowerSaving = true;
}

ThermoStat.prototype.up = function (){
  if(this.temperature + 1 > this._maxTemp()){return}
  this.temperature += 1;
}

ThermoStat.prototype.down = function(){
  if(this.temperature -1 < this._MIN_TEMP){return}
  this.temperature -= 1;
}

ThermoStat.prototype.reset = function(){
  this.temperature = this._START_TEMP;
}

ThermoStat.prototype.usage = function(){
  if      (this.temperature < 18) {return 'low-usage'}
  else if (this.temperature < 25 ) {return 'medium-usage'}
  else return 'high-usage'
}

ThermoStat.prototype._maxTemp = function(){
  if(this.isPowerSaving){return this._MAX_TEMP_SAVING}
  return this._MAX_TEMP_NO_SAVE
}
