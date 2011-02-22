//
//---- HUMAN CLASSES ----//
//
//This file contain all the classes
//for the human race.
//The base calculations are inherited
//from RowClass.
//

//
//---- ENCHANTER ----//
//

//Initilaze Enchanter and inherit from RowClass
function Enchanter(lvl) {
  RowClass.call(this, lvl);
}

Enchanter.prototype = new RowClass( );

delete Enchanter.prototype.lvl;
delete Enchanter.prototype.str;
delete Enchanter.prototype.con;
delete Enchanter.prototype.dex
delete Enchanter.prototype.inte;
delete Enchanter.prototype.wis;
delete Enchanter.prototype.minStr;
delete Enchanter.prototype.minCon;
delete Enchanter.prototype.minDex
delete Enchanter.prototype.minInte;
delete Enchanter.prototype.minWis;
delete Enchanter.prototype.maxStr;
delete Enchanter.prototype.maxCon;
delete Enchanter.prototype.maxDex
delete Enchanter.prototype.maxInte;
delete Enchanter.prototype.maxWis;
delete Enchanter.prototype.bonusPoints;

Enchanter.prototype.constructor = RowClass;

//Override methods used in Enchanter class
Enchanter.prototype.usedBPDex = function( ) {
  return (this.dex - this.minDex) * 2; 
}

Enchanter.prototype.usedBPInte = function( ) {
  return (this.inte - this.minInte) * 2;
}

Enchanter.prototype.calculateAndSetMaxDex = function( ) {
  this.maxDex = this.dex + (this.bonusPoints / 2);
}

Enchanter.prototype.calculateAndSetMaxInte = function( ) {
  this.maxInte = this.inte + (this.bonusPoints / 2);
}

Enchanter.prototype.calculateAndSetMinDex = function( ) {
  if(this.lvl < 10) {
    this.minDex = this.lvl - 1 + 20;
  } else {
    var i = 1;
    this.minDex = 20;
    for(i = 1; i < this.lvl; i++) {
      if(i % 2 == 0) {
        this.minDex = this.minDex + 1;
      } 
      if(i % 2 == 1) {
        this.minDex = this.minDex + 2;
      }
    }
  }
}

Enchanter.prototype.calculateAndSetMinInte = function( ) {
  if(this.lvl < 10) {
    this.minInte = 20;
  } else {
    var i = 1;
    this.minInte = 20;
    for(i = 1; i < this.lvl; i++) {
      if(i % 2 == 0) {
        this.minInte = this.minInte + 2;
      }
      if(i % 2 == 1) {
        this.minInte = this.minInte + 1;
      }
    }
  }
}

Enchanter.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.dex -20) * 0.3 * this.lvl);
}

Enchanter.prototype.calculateMagicPower = function( ) {
  return ((this.int - 20) * 3.1) + ((this.wis - 20) * 2)
}

//
//---- SORCERER CLASS ----//
//
//
//Initilaze Sorcerer and inherit from RowClass
function Sorcerer(lvl) {
  RowClass.call(this, lvl);
}

Sorcerer.prototype = new RowClass( );

delete Sorcerer.prototype.lvl;
delete Sorcerer.prototype.str;
delete Sorcerer.prototype.con;
delete Sorcerer.prototype.dex
delete Sorcerer.prototype.inte;
delete Sorcerer.prototype.wis;
delete Sorcerer.prototype.minStr;
delete Sorcerer.prototype.minCon;
delete Sorcerer.prototype.minDex
delete Sorcerer.prototype.minInte;
delete Sorcerer.prototype.minWis;
delete Sorcerer.prototype.maxStr;
delete Sorcerer.prototype.maxCon;
delete Sorcerer.prototype.maxDex
delete Sorcerer.prototype.maxInte;
delete Sorcerer.prototype.maxWis;
delete Sorcerer.prototype.bonusPoints;

Sorcerer.prototype.constructor = RowClass;

//Override methods used for this class
Sorcerer.prototype.usedBPDex = function( ) {
  return (this.dex - this.minDex) * 2; 
}

Sorcerer.prototype.usedBPInte = function( ) {
  return (this.inte - this.minInte) * 2;
}

Sorcerer.prototype.calculateAndSetMaxDex = function( ) {
  this.maxDex = this.dex + (this.bonusPoints / 2);
}

Sorcerer.prototype.calculateAndSetMaxInte = function( ) {
  this.maxInte = this.inte + (this.bonusPoints / 2);
}

Sorcerer.prototype.calculateAndSetMinDex = function( ) {
  if(this.lvl < 10) {
    this.minDex = this.lvl - 1 + 20;
  } else {
    this.minDex = this.lvl - 1 + 20;
  }
}

Sorcerer.prototype.calculateAndSetMinInte = function( ) {
  if(this.lvl < 10) {
    this.minInte = 20;
  } else {
    this.minInte = (((this.lvl - 1) * 2) + 20);
  }
}

Sorcerer.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.dex -20) * 0.3 * this.lvl);
}

Sorcerer.prototype.calculateMagicPower = function( ) {
  return ((this.int - 20) * 3.1) + ((this.wis - 20) * 2)
}

//
//---- CLERIC CLASS ----//
//
//
//Initilaze Cleric and inherit from RowClass
function Cleric(lvl) {
  RowClass.call(this, lvl);
}

Cleric.prototype = new RowClass( );

delete Cleric.prototype.lvl;
delete Cleric.prototype.str;
delete Cleric.prototype.con;
delete Cleric.prototype.dex
delete Cleric.prototype.inte;
delete Cleric.prototype.wis;
delete Cleric.prototype.minStr;
delete Cleric.prototype.minCon;
delete Cleric.prototype.minDex
delete Cleric.prototype.minInte;
delete Cleric.prototype.minWis;
delete Cleric.prototype.maxStr;
delete Cleric.prototype.maxCon;
delete Cleric.prototype.maxDex
delete Cleric.prototype.maxInte;
delete Cleric.prototype.maxWis;
delete Cleric.prototype.bonusPoints;

Cleric.prototype.constructor = RowClass;

//Override methods used for this class
Cleric.prototype.usedBPCon = function( ) {
  return (this.con - this.minCon) * 2; 
}

Cleric.prototype.usedBPWis = function( ) {
  return (this.wis - this.minWis) * 2;
}

Cleric.prototype.calculateAndSetMaxCon = function( ) {
  this.maxCon = this.con + (this.bonusPoints / 2);
}

Cleric.prototype.calculateAndSetMaxWis = function( ) {
  this.maxWis = this.wis + (this.bonusPoints / 2);
}

Cleric.prototype.calculateAndSetMinCon = function( ) {
  if(this.lvl < 10) {
    this.minCon = this.lvl - 1 + 20;
  } else {
    this.minCon = this.lvl - 1 + 20;
  }
}

Cleric.prototype.calculateAndSetMinWis = function( ) {
  if(this.lvl < 10) {
    this.minWis = 20;
  } else {
    this.minWis = (((this.lvl - 1) * 2) + 20);
  }
}

Cleric.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.con -20) * 0.2 * this.lvl);
}

Cleric.prototype.calculateMagicPower = function( ) {
  return ((this.int - 20) * 1) + ((this.wis - 20) * 1.5)
}
