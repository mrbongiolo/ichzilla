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
//  BASE HP = 250 + (50 * level) + ((CON-20) * 0.2 * Level) + ((DEX-20) * 0.05 * Level)
//
//source: http://forum.ruinsofwar.com/viewtopic.php?f=27&t=6719
//source: http://forum.ruinsofwar.com/viewtopic.php?f=8&t=9820
//
//  The Longevity Ability will also modify the base HP
//  it modify the "(50 * level)" part
//    lvl 1 = (55 * level)
//    lvl 2 = (60 * level)
//    lvl 3 = (65 * level)
//
//  Note that right now Ichzilla doesn't take in consideration any
//  kind of ability.
//
//this is the Base HP calculation. 
RowClass.prototype.calculateHP = function( ) {
  return Math.floor(250 + (50 * this.lvl) + ((this.con - 20) * 0.2 * this.lvl) + ((this.dex - 20) * 0.05 * this.lvl));
}

////---- Calculate DEFENSE ----//
//
//Formula:
//  
//  Armor Class Bonus: Defender/Warrior/Priest/Cleric/Templar/Attacker: 0.3 (con)
//  Armor Class Bonus: Life: 0.3 (dex)
//  Armor Class Bonus: All other classes: 0
//  Armor: CON * IronSkinValue + (MAIN CLASS STAT - 20) * Armor Class Bonus
//
//source: ADM-Brown
//
RowClass.prototype.calculateDefense = function( ) {
  return 0;
}

////---- Calculate DEFENSE PERCENTAGE ----//
//
//Formula:
//  
//  Defense %: ( ( 99 * Armor / 4 ) / ( armor / 4 + 50 ) * 100 ) / 100
//
//source: ADM-Brown
//
RowClass.prototype.calculateDefensePercentage = function( ) {
  return (((99 * this.calculateDefense() / 4) / (this.calculateDefense() / 4 + 50) * 100) / 100).toFixed(2);
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
//  Acolyte classes:
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
//  MagicRes Class Bonus: Defender/Warrior/Assassin/Archer/Templar/Attacker/Gunner/Shadow: 0.3
//  MagicRes Class Bonus: Mage/Officiator: 2.4
//  MagicRes Class Bonus: Acolyte/Priest/Cleric/Life: 3
//  MagicRes Class Bonus: Sorcerer/Enchanter/Rune: 3.2
//  MagicRes Class Bonus: All other classes: 0
//  
//  MagicRes = ((INT - 20) + (WIS - 20)) * MagicRes Class Bonus
//
//  Magic Res %: ( ( INT + WIS * 0.8 ) + MAIN CLASS STAT * MagicRes Class Bonus ) + ( ( 99 * ( MagicRes * 0.85 ) ) / ( ( MagicRes * 0.85 ) + 50 ) * 100 ) / 100 - 2
//
//  Source: ADM-Brown
//
RowClass.prototype.calculateMagicResistance = function( ) {
  return 0;
}

//---- Calculate MAGIC DAMAGE REDUCTION ----//
//
//Formula:
//
// mDmgRed = ((99 * mr * 0.85)) / (mr * 0.85 + 50)  -  2;
//
//create function to calculate it
//
//The output from this formula is reduction of Magical Damage in %. (The value that shows when you mouseOver the "mrvalue" in-game.)

//---- Calculate DAMAGE REDUCTION ----//
//
//Formula:
//
// pDmgRed = (99 * def / 4) / (def / 4 + 50);
//
//create function to calculate it
// 
//The output from this formula is reduction of Physical Damage in %. (The value that shows next to the "defvalue" in-game.)

//---- Calculate CRITICAL CHANCE REDUCTION ----//
//
//Formula:
//
// critRed = (50 * (evasion-300) / 4) / ((evasion-300) / 4 + 125);
//
//create function to calculate it
// 
//The output from this formula is reduction of critical in %. (The value that shows when you mouseOver "Evasionvalue" in-game.)

//---- Calculate CRITICAL CHANCE ----//
//
//Formula:
//
// critChance = (99 * crit / 2) / (crit / 2 + 100);
//
//create function to calculate it
// 
//The output from this formula is Criticalchance in %. (The value that shows when you mouseOver "Critical-value" in-game.)
//
//Sources for all these formulas is an msn-conversation with ADM-Black
//


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
