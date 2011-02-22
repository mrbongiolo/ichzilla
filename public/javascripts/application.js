//
//Ichzilla Javascript file
//

//---- HP ----//
//
function calculateHP() {
  var values = {};
  $.each($('form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });
  var base_hp = Math.floor(150 + (25 * values['level']) + ((values['con'] -20) * 0.15 * values['level']) + ((values['dex'] - 20) * 0.05 * values['level']));
  var row_class_hp = 0;
  switch(values['row_class']) {
  case 'warrior':
    row_class_hp = Math.floor((values['con'] -20) * 0.35 * values['level']);
    break;
  case 'attacker':
    row_class_hp = Math.floor((values['con'] -20) * 0.35 * values['level']);
    break;
  case 'defender':
    row_class_hp = Math.floor((values['con'] -20) * 0.4 * values['level']);
    break;
  case 'templar':
    row_class_hp = Math.floor((values['con'] -20) * 0.4 * values['level']);
    break;
  case 'assassin':
    row_class_hp = Math.floor((values['str'] -20) * 0.1 * values['level']);
    break;
  case 'archer':
    row_class_hp = Math.floor((values['str'] -20) * 0.1 * values['level']);
    break;
  case 'gunner':
    row_class_hp = Math.floor((values['str'] -20) * 0.1 * values['level']);
    break;
  case 'shadow':
    row_class_hp = Math.floor((values['str'] -20) * 0.1 * values['level']);
    break;
  case 'sorcerer':
    row_class_hp = Math.floor((values['dex'] -20) * 0.3 * values['level']);
    break;
  case 'enchanter':
    row_class_hp = Math.floor((values['dex'] -20) * 0.3 * values['level']);
    break;
  case 'rune':
    row_class_hp = Math.floor((values['dex'] -20) * 0.3 * values['level']);
    break;
  case 'priest':
    row_class_hp = Math.floor((values['con'] -20) * 0.2 * values['level']);
    break;
  case 'cleric':
    row_class_hp = Math.floor((values['con'] -20) * 0.2 * values['level']);
    break;
  case 'life':
    row_class_hp = Math.floor((values['dex'] -20) * 0.2 * values['level']);
    break;
  default: //do nothing
  }
  $('#status_hp').text(base_hp + row_class_hp);
}

function showHP( ) {
  $('#status_hp').text(myChar.calculateHP());
}


//---- MAGIC POWER ----//
//
//Formula:
//  
//  Caster classes:
//  magic = ((INT - 20) * 3.1) + ((WIS - 20) * 2)
//
//  Fighter classes:
//  magic = ((INT - 20) * 2) + ((WIS - 20) * 2)
//
//source: http://forum.ruinsofwar.com/viewtopic.php?f=27&t=6719
//
function calculateMagicPower() {
  var values = {};
  $.each($('form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });
  var row_class_magic = 0;
  switch(values['row_class']) {
  case 'warrior':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'attacker':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'defender':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'templar':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'assassin':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'archer':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'gunner':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'shadow':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'sorcerer':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'enchanter':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'rune':
    row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
    break;
  case 'priest':
    row_class_magic = Math.floor(((values['int'] - 20) * 1) + ((values['wis'] - 20) * 1.5));
    break;
  case 'cleric':
    row_class_magic = Math.floor(((values['int'] - 20) * 1) + ((values['wis'] - 20) * 1.5));
    break;
  case 'life':
    row_class_magic = Math.floor(((values['int'] - 20) * 1) + ((values['wis'] - 20) * 1.5));
    break;
  default: //do nothing
  }
  $('#status_magic_power').text(row_class_magic);
}

//---- MAGIC RESISTANCE ----//
//
//Formula:
//
//  Fighter classes:
//  mr = ((INT - 20) * 0.75) + ((WIS - 20) * 0.75)
//
//create function to calculate it



//---- start calculation ----//
//
//Function used to call all calculation logic
//
function calculate(values) {
  switch(values['row_class']) {
  case 'warrior':
    myChar = new Warrior(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'attacker':
    myChar = new Attacker(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'defender':
    myChar = new Defender(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'templar':
    myChar = new Templar(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'assassin':
    myChar = new Assassin(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'archer':
    myChar = new Archer(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'gunner':
    myChar = new Gunner(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'shadow':
    myChar = new Shadow(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'sorcerer':
    myChar = new Sorcerer(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'enchanter':
    myChar = new Enchanter(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'rune':
    myChar = new Rune(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'priest':
    myChar = new Priest(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'cleric':
    myChar = new Cleric(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  case 'life':
    myChar = new Life(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    alert(myChar.toString());
    break;
  default: //do nothing
  }
}

function setMinMaxStatValues( ) {
  $('#str').html('');
  $('#con').html('');
  $('#dex').html('');
  $('#int').html('');
  $('#wis').html('');
 
  //STR
  var auxArr = [];
  for(i = myChar.minStr; i <= myChar.maxStr; i++) {
    auxArr[i] = "<option value='" + i + "' " + (i == myChar.str ? "selected='selected' " : "") + ">" + i + "</option>";
  }
  $('#str').append(auxArr.join(''));
  //CON
  auxArr = [];
  for(i = myChar.minCon; i <= myChar.maxCon; i++) {
    auxArr[i] = "<option value='" + i + "' " + (i == myChar.con ? "selected='selected' " : "") + ">" + i + "</option>";
  }
  $('#con').append(auxArr.join(''));
  //DEX
  auxArr = [];
  for(i = myChar.minDex; i <= myChar.maxDex; i++) {
    auxArr[i] = "<option value='" + i + "' " + (i == myChar.dex ? "selected='selected' " : "") + ">" + i + "</option>";
  }
  $('#dex').append(auxArr.join(''));
  //INT
  auxArr = [];
  for(i = myChar.minInte; i <= myChar.maxInte; i++) {
    auxArr[i] = "<option value='" + i + "' " + (i == myChar.inte ? "selected='selected' " : "") + ">" + i + "</option>";
  }
  $('#int').append(auxArr.join(''));
  //WIS
  auxArr = [];
  for(i = myChar.minWis; i <= myChar.maxWis; i++) {
    auxArr[i] = "<option value='" + i + "' " + (i == myChar.wis ? "selected='selected' " : "") + ">" + i + "</option>";
  }
  $('#wis').append(auxArr.join(''));
}

$(document).ready(function( ) {
  myChar = new RowClass($('#level').attr('value'));
  $('#row_class').change( function() {
    //Do awesome stuff here
  });
  $("#level").change( function( ) {
    var values = {};
    $.each($('form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    calculate(values);
  });
  $('.stat_selector').change( function( ) {
    var values = {};
    $.each($('form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    myChar.str = Number(values['str']);
    myChar.con = Number(values['con']);
    myChar.dex = Number(values['dex']);
    myChar.inte = Number(values['int']);
    myChar.wis = Number(values['wis']);

    myChar.calculateAndSetBonusPoints();
    $('#bonus_points').text(myChar.bonusPoints);
    myChar.calculateStats( );
    
    setMinMaxStatValues( );
    
    //alert(myChar.toString( ));
    showHP();
    calculateMagicPower();
  });
});
