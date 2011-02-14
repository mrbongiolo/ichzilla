function RowClass(lvl) {
  this.lvl = lvl;
  this.str = 20;
  this.con = 20;
  this.dex = 20;
  this.inte = 20;
  this.wis = 20;
  this.bonusPoints = 0;
  this.calculateAndSetBonusPoints( );
}

RowClass.prototype.calculateAndSetBonusPoints = function( ) {
  if(this.lvl < 10) {
    this.bonusPoints = 0;
  } else {
    this.bonusPoints = (((this.lvl -1) * 4) + 10);
  }
}

//
//---- Calculate MAX Stat Value ----//
//

RowClass.prototype.maxStr = function( ) {
  return this.str + this.bonusPoints;
}

RowClass.prototype.maxCon = function( ) {
  return this.con + this.bonusPoints;
}

RowClass.prototype.maxDex = function( ) {
  return this.dex + this.bonusPoints;
}

RowClass.prototype.maxInte = function( ) {
  return this.inte + this.bonusPoints;
}

RowClass.prototype.maxWis = function( ) {
  return this.wis + this.bonusPoints;
}

//
//---- Calculate Stat Values ----//
//

RowClass.prototype.calculateAndSetStr = function( ) {
  this.str = 20;
}

RowClass.prototype.calculateAndSetCon = function( ) {
  this.con = 20;
}

RowClass.prototype.calculateAndSetDex = function( ) {
  this.dex = 20;
}

RowClass.prototype.calculateAndSetInte = function( ) {
  this.inte = 20;
}

RowClass.prototype.calculateAndSetWis = function( ) {
  this.wis = 20;
}


RowClass.prototype.calculateStats = function( ) {
  this.calculateAndSetStr( );
  this.calculateAndSetCon( );
  this.calculateAndSetDex( );
  this.calculateAndSetInte( );
  this.calculateAndSetWis( );
}
