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
delete Enchanter.prototype.bonusPoints;

Enchanter.prototype.constructor = RowClass;

//
//---- Overridding Some Methods
//

Enchanter.prototype.maxDex = function( ) {
  return this.dex + (this.bonusPoints / 2);
}

Enchanter.prototype.maxInte = function( ) {
  return this.inte + (this.bonusPoints / 2);
}

Enchanter.prototype.calculateAndSetDex = function( ) {
  if(this.lvl < 10) {
    this.lvl = this.lvl - 1 + 20;
  } else {
    var i = 1;
    this.dex = 20;
    for(i = 1; i < this.lvl; i++) {
      if(i % 2 == 0) {
        this.dex = this.dex + 1;
      } 
      if(i % 2 == 1) {
        this.dex = this.dex + 2;
      }
    }
  }
}

Enchanter.prototype.calculateAndSetInte = function( ) {
  if(this.lvl < 10) {
    this.inte = 20;
  } else {
    var i = 1;
    this.inte = 20;
    for(i = 1; i < this.lvl; i++) {
      if(i % 2 == 0) {
        this.inte = this.inte + 2;
      }
      if(i % 2 == 1) {
        this.inte = this.inte + 1;
      }
    }
  }
}

Enchanter.prototype.toString = function( ) {
  return "Class Name: Enchanter, Level: " + this.lvl + 
    ", Stats: {str: " + this.str +
    ", con: " + this.con + 
    ", dex: " + this.dex +
    ", int: " + this.inte +
    ", wis: " + this.wis + "}";
}
