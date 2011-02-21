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

//
//---- Overridding Some Methods
//

RowClass.prototype.usedBPDex = function( ) {
  return (this.dex - this.minDex) * 2; 
}

RowClass.prototype.usedBPInte = function( ) {
  return (this.inte - this.minInte) * 2;
}

Enchanter.prototype.calculateAndSetMaxDex = function( ) {
  this.maxDex = this.minDex + (this.bonusPoints / 2);
}

Enchanter.prototype.calculateAndSetMaxInte = function( ) {
  this.maxInte = this.minInte + (this.bonusPoints / 2);
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

