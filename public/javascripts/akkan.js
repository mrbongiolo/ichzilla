//
//---- AK'KAN CLASSES ----//
//
//
//This file contain all the classes
//for the ak'kan race.
//The base calculations are inherited
//from RowClass.
//

//
//---- RUNE CLASS ----//
//
//
//Initilaze Rune and inherit from RowClass
function Rune(lvl) {
  RowClass.call(this, lvl);
}

Rune.prototype = new RowClass( );

delete Rune.prototype.lvl;
delete Rune.prototype.str;
delete Rune.prototype.con;
delete Rune.prototype.dex
delete Rune.prototype.inte;
delete Rune.prototype.wis;
delete Rune.prototype.minStr;
delete Rune.prototype.minCon;
delete Rune.prototype.minDex
delete Rune.prototype.minInte;
delete Rune.prototype.minWis;
delete Rune.prototype.maxStr;
delete Rune.prototype.maxCon;
delete Rune.prototype.maxDex
delete Rune.prototype.maxInte;
delete Rune.prototype.maxWis;
delete Rune.prototype.bonusPoints;

Rune.prototype.constructor = RowClass;

//Override methods used for this class
Rune.prototype.usedBPDex = function( ) {
  return (this.dex - this.minDex) * 2; 
}

Rune.prototype.usedBPInte = function( ) {
  return (this.inte - this.minInte) * 2;
}

Rune.prototype.calculateAndSetMaxDex = function( ) {
  this.maxDex = this.dex + (this.bonusPoints / 2);
}

Rune.prototype.calculateAndSetMaxInte = function( ) {
  this.maxInte = this.inte + (this.bonusPoints / 2);
}

Rune.prototype.calculateAndSetMinDex = function( ) {
  if(this.lvl < 10) {
    this.minDex = this.lvl - 1 + 20;
  } else {
    this.minDex = this.lvl - 1 + 20;
  }
}

Rune.prototype.calculateAndSetMinInte = function( ) {
  if(this.lvl < 10) {
    this.minInte = 20;
  } else {
    this.minInte = (((this.lvl - 1) * 2) + 20);
  }
}

Rune.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.dex -20) * 0.3 * this.lvl);
}

Rune.prototype.calculateMagicPower = function( ) {
  return Math.floor(((this.inte - 20) * 3.1) + ((this.wis - 20) * 2));
}

//
//---- LIFE CLASS ----//
//
//
//Initilaze Life and inherit from RowClass
function Life(lvl) {
  RowClass.call(this, lvl);
}

Life.prototype = new RowClass( );

delete Life.prototype.lvl;
delete Life.prototype.str;
delete Life.prototype.con;
delete Life.prototype.dex
delete Life.prototype.inte;
delete Life.prototype.wis;
delete Life.prototype.minStr;
delete Life.prototype.minCon;
delete Life.prototype.minDex
delete Life.prototype.minInte;
delete Life.prototype.minWis;
delete Life.prototype.maxStr;
delete Life.prototype.maxCon;
delete Life.prototype.maxDex
delete Life.prototype.maxInte;
delete Life.prototype.maxWis;
delete Life.prototype.bonusPoints;

Life.prototype.constructor = RowClass;

//Override methods used for this class
Life.prototype.usedBPDex = function( ) {
  return (this.dex - this.minDex) * 2; 
}

Life.prototype.usedBPWis = function( ) {
  return (this.wis - this.minWis) * 2;
}

Life.prototype.calculateAndSetMaxDex = function( ) {
  this.maxDex = this.dex + (this.bonusPoints / 2);
}

Life.prototype.calculateAndSetMaxWis = function( ) {
  this.maxWis = this.wis + (this.bonusPoints / 2);
}

Life.prototype.calculateAndSetMinDex = function( ) {
  if(this.lvl < 10) {
    this.minDex = this.lvl - 1 + 20;
  } else {
    this.minDex = this.lvl - 1 + 20;
  }
}

Life.prototype.calculateAndSetMinWis = function( ) {
  if(this.lvl < 10) {
    this.minWis = 20;
  } else {
    this.minWis = (((this.lvl - 1) * 2) + 20);
  }
}

Life.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.dex - 20) * 0.2 * this.lvl);
}

Life.prototype.calculateDefense = function( ) {
  return Math.floor(( this.con * 0 ) + ( (this.dex - 20) * 0.3 ));
}

Life.prototype.calculateMagicPower = function( ) {
  return Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) * 3));
}

//
//---- SHADOW CLASS ----//
//
//
//Initilaze Shadow and inherit from RowClass
function Shadow(lvl) {
  RowClass.call(this, lvl);
}

Shadow.prototype = new RowClass( );

delete Shadow.prototype.lvl;
delete Shadow.prototype.str;
delete Shadow.prototype.con;
delete Shadow.prototype.dex
delete Shadow.prototype.inte;
delete Shadow.prototype.wis;
delete Shadow.prototype.minStr;
delete Shadow.prototype.minCon;
delete Shadow.prototype.minDex
delete Shadow.prototype.minInte;
delete Shadow.prototype.minWis;
delete Shadow.prototype.maxStr;
delete Shadow.prototype.maxCon;
delete Shadow.prototype.maxDex
delete Shadow.prototype.maxInte;
delete Shadow.prototype.maxWis;
delete Shadow.prototype.bonusPoints;

Shadow.prototype.constructor = RowClass;

//Override methods used for this class
Shadow.prototype.usedBPStr = function( ) {
  return (this.str - this.minStr) * 2;
}

Shadow.prototype.usedBPDex = function( ) {
  return (this.dex - this.minDex) * 2; 
}

Shadow.prototype.calculateAndSetMaxStr = function( ) {
  this.maxStr = this.str + (this.bonusPoints / 2);
}

Shadow.prototype.calculateAndSetMaxDex = function( ) {
  this.maxDex = this.dex + (this.bonusPoints / 2);
}

Shadow.prototype.calculateAndSetMinStr = function( ) {
  if(this.lvl < 10) {
    this.minStr = 20;
  } else {
    this.minStr = this.lvl - 1 + 20;
  }
}

Shadow.prototype.calculateAndSetMinDex = function( ) {
  if(this.lvl < 10) {
    this.minDex = this.lvl - 1 + 20;
  } else {
    this.minDex = (((this.lvl - 1) * 2) + 20);
  }
}

Shadow.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.str -20) * 0.1 * this.lvl);
}

Shadow.prototype.calculateMagicPower = function( ) {
  return Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) * 2));
}

//
//---- TEMPLAR CLASS ----//
//
//
//Initilaze Templar and inherit from RowClass
function Templar(lvl) {
  RowClass.call(this, lvl);
}

Templar.prototype = new RowClass( );

delete Templar.prototype.lvl;
delete Templar.prototype.str;
delete Templar.prototype.con;
delete Templar.prototype.dex
delete Templar.prototype.inte;
delete Templar.prototype.wis;
delete Templar.prototype.minStr;
delete Templar.prototype.minCon;
delete Templar.prototype.minDex
delete Templar.prototype.minInte;
delete Templar.prototype.minWis;
delete Templar.prototype.maxStr;
delete Templar.prototype.maxCon;
delete Templar.prototype.maxDex
delete Templar.prototype.maxInte;
delete Templar.prototype.maxWis;
delete Templar.prototype.bonusPoints;

Templar.prototype.constructor = RowClass;

//Override methods used for this class
Templar.prototype.usedBPStr = function( ) {
  return (this.str - this.minStr) * 2;
}

Templar.prototype.usedBPCon = function( ) {
  return (this.con - this.minCon) * 2; 
}

Templar.prototype.calculateAndSetMaxStr = function( ) {
  this.maxStr = this.str + (this.bonusPoints / 2);
}

Templar.prototype.calculateAndSetMaxCon = function( ) {
  this.maxCon = this.con + (this.bonusPoints / 2);
}

Templar.prototype.calculateAndSetMinStr = function( ) {
  if(this.lvl < 10) {
    this.minStr = 20;
  } else {
    var i = 1;
    this.minStr = 20;
    for(i = 1; i < this.lvl; i++) {
      if(i % 2 == 0) {
        this.minStr = this.minStr + 2;
      }
      if(i % 2 == 1) {
        this.minStr = this.minStr + 1;
      }
    }
  }
}

Templar.prototype.calculateAndSetMinCon = function( ) {
  if(this.lvl < 10) {
    this.minCon = this.lvl - 1 + 20;
  } else {
    var i = 1;
    this.minCon = 20;
    for(i = 1; i < this.lvl; i++) {
      if(i % 2 == 0) {
        this.minCon = this.minCon + 1;
      } 
      if(i % 2 == 1) {
        this.minCon = this.minCon + 2;
      }
    }
  }
}

Templar.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.con -20) * 0.4 * this.lvl);
}

Templar.prototype.calculateDefense = function( ) {
  return Math.floor(( this.con * 0 ) + ( (this.con - 20) * 0.3 ));
}

Templar.prototype.calculateMagicPower = function( ) {
  return Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) * 2));
}

//
//---- ATTACKER CLASS ----//
//
//
//Initilaze Attacker and inherit from RowClass
function Attacker(lvl) {
  RowClass.call(this, lvl);
}

Attacker.prototype = new RowClass( );

delete Attacker.prototype.lvl;
delete Attacker.prototype.str;
delete Attacker.prototype.con;
delete Attacker.prototype.dex
delete Attacker.prototype.inte;
delete Attacker.prototype.wis;
delete Attacker.prototype.minStr;
delete Attacker.prototype.minCon;
delete Attacker.prototype.minDex
delete Attacker.prototype.minInte;
delete Attacker.prototype.minWis;
delete Attacker.prototype.maxStr;
delete Attacker.prototype.maxCon;
delete Attacker.prototype.maxDex
delete Attacker.prototype.maxInte;
delete Attacker.prototype.maxWis;
delete Attacker.prototype.bonusPoints;

Attacker.prototype.constructor = RowClass;

//Override methods used for this class
Attacker.prototype.usedBPStr = function( ) {
  return (this.str - this.minStr) * 2;
}

Attacker.prototype.usedBPCon = function( ) {
  return (this.con - this.minCon) * 2; 
}

Attacker.prototype.calculateAndSetMaxStr = function( ) {
  this.maxStr = this.str + (this.bonusPoints / 2);
}

Attacker.prototype.calculateAndSetMaxCon = function( ) {
  this.maxCon = this.con + (this.bonusPoints / 2);
}

Attacker.prototype.calculateAndSetMinStr = function( ) {
  if(this.lvl < 10) {
    this.minStr = 20;
  } else {
    this.minStr = (((this.lvl - 1) * 2) + 20);
  }
}

Attacker.prototype.calculateAndSetMinCon = function( ) {
  if(this.lvl < 10) {
    this.minCon = this.lvl - 1 + 20;
  } else {
    this.minCon = this.lvl - 1 + 20;
  }
}
//Apparently Attackers have been changed from 0,35 -0,3 
Attacker.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.con -20) * 0.3 * this.lvl);
}

Attacker.prototype.calculateDefense = function( ) {
  return Math.floor(( this.con * 0 ) + ( (this.con - 20) * 0.3 ));
}

Attacker.prototype.calculateMagicPower = function( ) {
  return Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) * 2));
}

//
//---- GUNNER CLASS ----//
//
//
//Initilaze Gunner and inherit from RowClass
function Gunner(lvl) {
  RowClass.call(this, lvl);
}

Gunner.prototype = new RowClass( );

delete Gunner.prototype.lvl;
delete Gunner.prototype.str;
delete Gunner.prototype.con;
delete Gunner.prototype.dex
delete Gunner.prototype.inte;
delete Gunner.prototype.wis;
delete Gunner.prototype.minStr;
delete Gunner.prototype.minCon;
delete Gunner.prototype.minDex
delete Gunner.prototype.minInte;
delete Gunner.prototype.minWis;
delete Gunner.prototype.maxStr;
delete Gunner.prototype.maxCon;
delete Gunner.prototype.maxDex
delete Gunner.prototype.maxInte;
delete Gunner.prototype.maxWis;
delete Gunner.prototype.bonusPoints;

Gunner.prototype.constructor = RowClass;

//Override methods used for this class
Gunner.prototype.usedBPStr = function( ) {
  return (this.str - this.minStr) * 2;
}

Gunner.prototype.usedBPDex = function( ) {
  return (this.dex - this.minDex) * 2; 
}

Gunner.prototype.calculateAndSetMaxStr = function( ) {
  this.maxStr = this.str + (this.bonusPoints / 2);
}

Gunner.prototype.calculateAndSetMaxDex = function( ) {
  this.maxDex = this.dex + (this.bonusPoints / 2);
}

Gunner.prototype.calculateAndSetMinStr = function( ) {
  if(this.lvl < 10) {
    this.minStr = this.lvl -1 + 20
  } else {
    var i = 1;
    this.minStr = 20;
    for(i = 1; i < this.lvl; i++) {
      if(i % 2 == 0) {
        this.minStr = this.minStr + 1;
      }
      if(i % 2 == 1) {
        this.minStr = this.minStr + 2;
      }
    }
  }
}

Gunner.prototype.calculateAndSetMinDex = function( ) {
  if(this.lvl < 10) {
    this.minDex = 20;
  } else {
    var i = 1;
    this.minDex = 20;
    for(i = 1; i < this.lvl; i++) {
      if(i % 2 == 0) {
        this.minDex = this.minDex + 2;
      } 
      if(i % 2 == 1) {
        this.minDex = this.minDex + 1;
      }
    }
  }
}

Gunner.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.str -20) * 0.1 * this.lvl);
}

Gunner.prototype.calculateMagicPower = function( ) {
  return Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) * 2));
}
