//
//---- AK'KAN CLASSES ----//
//
//This file contain all the classes
//for the ak'kan race.
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
  return ((this.int - 20) * 3.1) + ((this.wis - 20) * 2)
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

Life.prototype.calculateMagicPower = function( ) {
  return ((this.int - 20) * 1) + ((this.wis - 20) * 1.5)
}

//
//---- PRIEST CLASS ----//
//
//
//Initilaze Priest and inherit from RowClass
function Priest(lvl) {
  RowClass.call(this, lvl);
}

Priest.prototype = new RowClass( );

delete Priest.prototype.lvl;
delete Priest.prototype.str;
delete Priest.prototype.con;
delete Priest.prototype.dex
delete Priest.prototype.inte;
delete Priest.prototype.wis;
delete Priest.prototype.minStr;
delete Priest.prototype.minCon;
delete Priest.prototype.minDex
delete Priest.prototype.minInte;
delete Priest.prototype.minWis;
delete Priest.prototype.maxStr;
delete Priest.prototype.maxCon;
delete Priest.prototype.maxDex
delete Priest.prototype.maxInte;
delete Priest.prototype.maxWis;
delete Priest.prototype.bonusPoints;

Priest.prototype.constructor = RowClass;

//Override methods used for this class
Priest.prototype.usedBPCon = function( ) {
  return (this.con - this.minCon) * 2; 
}

Priest.prototype.usedBPWis = function( ) {
  return (this.wis - this.minWis) * 2;
}

Priest.prototype.calculateAndSetMaxCon = function( ) {
  this.maxCon = this.con + (this.bonusPoints / 2);
}

Priest.prototype.calculateAndSetMaxWis = function( ) {
  this.maxWis = this.wis + (this.bonusPoints / 2);
}

Priest.prototype.calculateAndSetMinCon = function( ) {
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

Priest.prototype.calculateAndSetMinWis = function( ) {
  if(this.lvl < 10) {
    this.minWis = 20;
  } else {
    var i = 1;
    this.minWis = 20;
    for(i = 1; i < this.lvl; i++) {
      if(i % 2 == 0) {
        this.minWis = this.minWis + 2;
      }
      if(i % 2 == 1) {
        this.minWis = this.minWis + 1;
      }
    }
  }
}

Priest.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.con -20) * 0.2 * this.lvl);
}

Priest.prototype.calculateMagicPower = function( ) {
  return ((this.int - 20) * 1) + ((this.wis - 20) * 1.5)
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

Templar.prototype.calculateMagicPower = function( ) {
  return ((this.int - 20) * 2) + ((this.wis - 20) * 2)
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

Attacker.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.con -20) * 0.35 * this.lvl);
}

Attacker.prototype.calculateMagicPower = function( ) {
  return ((this.int - 20) * 2) + ((this.wis - 20) * 2)
}

//
//---- ASSASSIN CLASS ----//
//
//
//Initilaze Assassin and inherit from RowClass
function Assassin(lvl) {
  RowClass.call(this, lvl);
}

Assassin.prototype = new RowClass( );

delete Assassin.prototype.lvl;
delete Assassin.prototype.str;
delete Assassin.prototype.con;
delete Assassin.prototype.dex
delete Assassin.prototype.inte;
delete Assassin.prototype.wis;
delete Assassin.prototype.minStr;
delete Assassin.prototype.minCon;
delete Assassin.prototype.minDex
delete Assassin.prototype.minInte;
delete Assassin.prototype.minWis;
delete Assassin.prototype.maxStr;
delete Assassin.prototype.maxCon;
delete Assassin.prototype.maxDex
delete Assassin.prototype.maxInte;
delete Assassin.prototype.maxWis;
delete Assassin.prototype.bonusPoints;

Assassin.prototype.constructor = RowClass;

//Override methods used for this class
Assassin.prototype.usedBPStr = function( ) {
  return (this.str - this.minStr) * 2;
}

Assassin.prototype.usedBPDex = function( ) {
  return (this.dex - this.minDex) * 2; 
}

Assassin.prototype.calculateAndSetMaxStr = function( ) {
  this.maxStr = this.str + (this.bonusPoints / 2);
}

Assassin.prototype.calculateAndSetMaxDex = function( ) {
  this.maxDex = this.dex + (this.bonusPoints / 2);
}

Assassin.prototype.calculateAndSetMinStr = function( ) {
  if(this.lvl < 10) {
    this.minStr = 20;
  } else {
    this.minStr = this.lvl - 1 + 20;
  }
}

Assassin.prototype.calculateAndSetMinDex = function( ) {
  if(this.lvl < 10) {
    this.minDex = this.lvl - 1 + 20;
  } else {
    this.minDex = (((this.lvl - 1) * 2) + 20);
  }
}

Assassin.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.str -20) * 0.1 * this.lvl);
}

//Still need to find out how the rogue class calculate Magic Power
Assassin.prototype.calculateMagicPower = function( ) {
  return 0; //((this.int - 20) * 2) + ((this.wis - 20) * 2)
}

//
//---- ARCHER CLASS ----//
//
//
//Initilaze Archer and inherit from RowClass
function Archer(lvl) {
  RowClass.call(this, lvl);
}

Archer.prototype = new RowClass( );

delete Archer.prototype.lvl;
delete Archer.prototype.str;
delete Archer.prototype.con;
delete Archer.prototype.dex
delete Archer.prototype.inte;
delete Archer.prototype.wis;
delete Archer.prototype.minStr;
delete Archer.prototype.minCon;
delete Archer.prototype.minDex
delete Archer.prototype.minInte;
delete Archer.prototype.minWis;
delete Archer.prototype.maxStr;
delete Archer.prototype.maxCon;
delete Archer.prototype.maxDex
delete Archer.prototype.maxInte;
delete Archer.prototype.maxWis;
delete Archer.prototype.bonusPoints;

Archer.prototype.constructor = RowClass;

//Override methods used for this class
Archer.prototype.usedBPStr = function( ) {
  return (this.str - this.minStr) * 2;
}

Archer.prototype.usedBPDex = function( ) {
  return (this.dex - this.minDex) * 2; 
}

Archer.prototype.calculateAndSetMaxStr = function( ) {
  this.maxStr = this.str + (this.bonusPoints / 2);
}

Archer.prototype.calculateAndSetMaxDex = function( ) {
  this.maxDex = this.dex + (this.bonusPoints / 2);
}

Archer.prototype.calculateAndSetMinStr = function( ) {
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

Archer.prototype.calculateAndSetMinDex = function( ) {
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

Archer.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.str -20) * 0.1 * this.lvl);
}

//Still need to find out how the rogue class calculate Magic Power
Archer.prototype.calculateMagicPower = function( ) {
  return 0; //((this.int - 20) * 2) + ((this.wis - 20) * 2)
}
