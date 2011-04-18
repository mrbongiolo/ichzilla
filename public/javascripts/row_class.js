function RowClass(lvl) {
  this.lvl = lvl;
  //min stats
  this.minStr = 20;
  this.minCon = 20;
  this.minDex = 20;
  this.minInte = 20;
  this.minWis = 20;
  //max stats
  this.maxStr = 20;
  this.maxCon = 20;
  this.maxDex = 20;
  this.maxInte = 20;
  this.maxWis = 20;
  //Calculate Min
  this.calculateAndSetMinStr( );
  this.calculateAndSetMinCon( );
  this.calculateAndSetMinDex( );
  this.calculateAndSetMinInte( );
  this.calculateAndSetMinWis( );
  //normal stats
  this.str = this.minStr;
  this.con = this.minCon;
  this.dex = this.minDex;
  this.inte = this.minInte;
  this.wis = this.minWis;
  //Calculate Max
  this.calculateAndSetMaxStr( );
  this.calculateAndSetMaxCon( );
  this.calculateAndSetMaxDex( );
  this.calculateAndSetMaxInte( );
  this.calculateAndSetMaxWis( );
  //other stuff
  this.bonusPoints = 0;
  this.calculateAndSetBonusPoints( );
}

RowClass.prototype.calculateAndSetBonusPoints = function( ) {
  if(this.lvl < 10) {
    this.bonusPoints = 0;
  } else {
    this.bonusPoints = (((this.lvl -1) * 4) + 10);
    this.bonusPoints = this.bonusPoints -
      this.usedBPStr() -
      this.usedBPCon() -
      this.usedBPDex() -
      this.usedBPInte() -
      this.usedBPWis();
  }
}

RowClass.prototype.usedBPStr = function( ) {
  return this.str - this.minStr;
}

RowClass.prototype.usedBPCon = function( ) {
  return this.con - this.minCon;
}

RowClass.prototype.usedBPDex = function( ) {
  return this.dex - this.minDex;
}

RowClass.prototype.usedBPInte = function( ) {
  return this.inte - this.minInte;
}

RowClass.prototype.usedBPWis = function( ) {
  return this.wis - this.minWis;
}

//Calculate Skill Points
RowClass.prototype.calculateSkillPoints = function( ) {
  return Number(this.lvl) + Math.floor((this.inte - 20) / 10);
}

//
//---- Calculate and Set MAX Stat Value ----//
//

RowClass.prototype.calculateAndSetMaxStr = function( ) {
  this.maxStr = this.str + this.bonusPoints;
}

RowClass.prototype.calculateAndSetMaxCon = function( ) {
  this.maxCon = this.con + this.bonusPoints;
}

RowClass.prototype.calculateAndSetMaxDex = function( ) {
  this.maxDex = this.dex + this.bonusPoints;
}

RowClass.prototype.calculateAndSetMaxInte = function( ) {
  this.maxInte = this.inte + this.bonusPoints;
}

RowClass.prototype.calculateAndSetMaxWis = function( ) {
  this.maxWis = this.wis + this.bonusPoints;
}

//
//---- Calculate MIN Stat Values ----//
//

RowClass.prototype.calculateAndSetMinStr = function( ) {
  this.minStr = 20;
}

RowClass.prototype.calculateAndSetMinCon = function( ) {
  this.minCon = 20;
}

RowClass.prototype.calculateAndSetMinDex = function( ) {
  this.minDex = 20;
}

RowClass.prototype.calculateAndSetMinInte = function( ) {
  this.minInte = 20;
}

RowClass.prototype.calculateAndSetMinWis = function( ) {
  this.minWis = 20;
}


RowClass.prototype.calculateStats = function( ) {
  //Calculate Min
  this.calculateAndSetMinStr( );
  this.calculateAndSetMinCon( );
  this.calculateAndSetMinDex( );
  this.calculateAndSetMinInte( );
  this.calculateAndSetMinWis( );
  //Calculate Max
  this.calculateAndSetMaxStr( );
  this.calculateAndSetMaxCon( );
  this.calculateAndSetMaxDex( );
  this.calculateAndSetMaxInte( );
  this.calculateAndSetMaxWis( );
}

////---- Calculate HP ----//
//
//Formula:
//  
//  HP = Base HP + Class HP
//
//source: http://forum.ruinsofwar.com/viewtopic.php?f=27&t=6719
//
//this is the Base HP calculation. This formula should suffice, since java has */. operater precedence over +- 
RowClass.prototype.calculateHP = function( ) {
  return Math.floor(150 + 25 * this.lvl + ((this.con-20) * 0.15 * this.lvl) + ((this.dex-20) * 0.05 * this.lvl));
}

////---- Calculate MAGIC POWER ----//
//
//Formula:
//  
//  Caster classes:
//  magic = ((INT - 20) * 3.1) + ((WIS - 20) * 2)
//
//  Fighter classes:
//  magic = ((INT - 20) * 2) + ((WIS - 20) * 2)
//
//  Acolity classes:
//  magic = ((INT - 20) * 2) + ((WIS - 20) * 3)
//
//  Rogue classes:
//  magic = ((INT - 20) *2) + ((WIS - 20) * 2)
//
//source: http://forum.ruinsofwar.com/viewtopic.php?f=27&t=6719
//
RowClass.prototype.calculateMagicPower = function( ) {
  return 0;
}

//---- Calculate MAGIC RESISTANCE ----//
//
//Formula:
//
//  Fighter classes:
//  mr = ((INT - 20) * 0.75) + ((WIS - 20) * 0.75)
//
//create function to calculate it


RowClass.prototype.toString = function( ) {
  return "Class Name: Row Class, Level: " + this.lvl + 
    ", Bonus Points: " + this.bonusPoints +
    ", Stats: {str: " + this.str +
    ", con: " + this.con + 
    ", dex: " + this.dex +
    ", int: " + this.inte +
    ", wis: " + this.wis + "}" +
    ", MIN Stats: {str: " + this.minStr +
    ", con: " + this.minCon + 
    ", dex: " + this.minDex +
    ", int: " + this.minInte +
    ", wis: " + this.minWis + "}" +
    ", MAX Stats: {str: " + this.maxStr +
    ", con: " + this.maxCon + 
    ", dex: " + this.maxDex +
    ", int: " + this.maxInte +
    ", wis: " + this.maxWis + "}";
}
