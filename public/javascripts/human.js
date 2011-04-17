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
  return Math.floor(((this.inte - 20) * 3.1) + ((this.wis - 20) * 2));
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
  return Math.floor(((this.inte - 20) * 3.1) + ((this.wis - 20) * 2));
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
  return Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) *3));
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
  return Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) * 3));
}

//
//---- DEFENDER CLASS ----//
//
//
//Initilaze Defender and inherit from RowClass
function Defender(lvl) {
  RowClass.call(this, lvl);
}

Defender.prototype = new RowClass( );

delete Defender.prototype.lvl;
delete Defender.prototype.str;
delete Defender.prototype.con;
delete Defender.prototype.dex
delete Defender.prototype.inte;
delete Defender.prototype.wis;
delete Defender.prototype.minStr;
delete Defender.prototype.minCon;
delete Defender.prototype.minDex
delete Defender.prototype.minInte;
delete Defender.prototype.minWis;
delete Defender.prototype.maxStr;
delete Defender.prototype.maxCon;
delete Defender.prototype.maxDex
delete Defender.prototype.maxInte;
delete Defender.prototype.maxWis;
delete Defender.prototype.bonusPoints;

Defender.prototype.constructor = RowClass;

//Override methods used for this class
Defender.prototype.usedBPStr = function( ) {
  return (this.str - this.minStr) * 2;
}

Defender.prototype.usedBPCon = function( ) {
  return (this.con - this.minCon) * 2; 
}

Defender.prototype.calculateAndSetMaxStr = function( ) {
  this.maxStr = this.str + (this.bonusPoints / 2);
}

Defender.prototype.calculateAndSetMaxCon = function( ) {
  this.maxCon = this.con + (this.bonusPoints / 2);
}

Defender.prototype.calculateAndSetMinStr = function( ) {
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

Defender.prototype.calculateAndSetMinCon = function( ) {
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

Defender.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.con -20) * 0.4 * this.lvl);
}

Defender.prototype.calculateMagicPower = function( ) {
  return Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) * 2));
}

//
//---- WARRIOR CLASS ----//
//
//
//Initilaze Warrior and inherit from RowClass
function Warrior(lvl) {
  RowClass.call(this, lvl);
}

Warrior.prototype = new RowClass( );

delete Warrior.prototype.lvl;
delete Warrior.prototype.str;
delete Warrior.prototype.con;
delete Warrior.prototype.dex
delete Warrior.prototype.inte;
delete Warrior.prototype.wis;
delete Warrior.prototype.minStr;
delete Warrior.prototype.minCon;
delete Warrior.prototype.minDex
delete Warrior.prototype.minInte;
delete Warrior.prototype.minWis;
delete Warrior.prototype.maxStr;
delete Warrior.prototype.maxCon;
delete Warrior.prototype.maxDex
delete Warrior.prototype.maxInte;
delete Warrior.prototype.maxWis;
delete Warrior.prototype.bonusPoints;

Warrior.prototype.constructor = RowClass;

//Override methods used for this class
Warrior.prototype.usedBPStr = function( ) {
  return (this.str - this.minStr) * 2;
}

Warrior.prototype.usedBPCon = function( ) {
  return (this.con - this.minCon) * 2; 
}

Warrior.prototype.calculateAndSetMaxStr = function( ) {
  this.maxStr = this.str + (this.bonusPoints / 2);
}

Warrior.prototype.calculateAndSetMaxCon = function( ) {
  this.maxCon = this.con + (this.bonusPoints / 2);
}

Warrior.prototype.calculateAndSetMinStr = function( ) {
  if(this.lvl < 10) {
    this.minStr = 20;
  } else {
    this.minStr = (((this.lvl - 1) * 2) + 20);
  }
}

Warrior.prototype.calculateAndSetMinCon = function( ) {
  if(this.lvl < 10) {
    this.minCon = this.lvl - 1 + 20;
  } else {
    this.minCon = this.lvl - 1 + 20;
  }
}

Warrior.prototype.calculateHP = function( ) {
  var baseHP = RowClass.prototype.calculateHP.apply(this);
  return baseHP + Math.floor((this.con -20) * 0.35 * this.lvl);
}

Warrior.prototype.calculateMagicPower = function( ) {
  return Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) * 2));
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

//Shadow, Archer, Assassin and Gunner all follow the same formula as Fighter classes
Assassin.prototype.calculateMagicPower = function( ) {
Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) * 2));
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

//Shadow, Archer, Assassin and Gunner all follow the same formula as Fighter classes
Archer.prototype.calculateMagicPower = function( ) {
  Math.floor(((this.inte - 20) * 2) + ((this.wis - 20) * 2));
}
