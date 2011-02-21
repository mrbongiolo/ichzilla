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
//
  case 'life':
    row_class_hp = Math.floor((values['dex'] -20) * 0.2 * values['level']);
    break;
  default: //do nothing
  }
  $('#status_hp').text(base_hp + row_class_hp);
//
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
  default:
    //do nothing
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
    myChar = new Enchanter(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
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
  default:
    //do nothing
  }
}

function setMinMaxStatValues( ) {
  $('#str').html('');
  $('#con').html('');
  $('#dex').html('');
  $('#int').html('');
  $('#wis').html('');
 
  alert('starting t');
  //STR
  var auxArr = [];
  for(i = myChar.minStr; i <= myChar.maxStr; i++) {
    auxArr[i] = "<option value='" + i + "'>" + i + "</option>";
  }
  $('#str').append(auxArr.join(''));
  alert('STR set');
  //CON
  auxArr = [];
  for(i = myChar.minCon; i <= myChar.maxCon; i++) {
    auxArr[i] = "<option value='" + i + "'>" + i + "</option>";
  }
  $('#con').append(auxArr.join(''));
  alert('CON set');
  //DEX
  auxArr = [];
  for(i = myChar.minDex; i <= myChar.maxDex; i++) {
    auxArr[i] = "<option value='" + i + "'>" + i + "</option>";
  }
  $('#dex').append(auxArr.join(''));
  alert('DEX set');
  //INT
  auxArr = [];
  for(i = myChar.minInte; i <= myChar.maxInte; i++) {
    auxArr[i] = "<option value='" + i + "'>" + i + "</option>";
  }
  $('#int').append(auxArr.join(''));
  alert('INT set');
  //WIS
  auxArr = [];
  for(i = myChar.minWis; i <= myChar.maxWis; i++) {
    auxArr[i] = "<option value='" + i + "'>" + i + "</option>";
  }
  $('#wis').append(auxArr.join(''));
  alert('WIS set');
}

function setMinMaxStatValues2() {
  var actualMaxStr = document.getElementById('str').length + myChar.minStr - 1;
  var actualMaxCon = document.getElementById('con').length + myChar.minCon - 1;
  var actualMaxDex = document.getElementById('dex').length + myChar.minDex - 1;
  var actualMaxInte = document.getElementById('int').length + myChar.minInte - 1;
  var actualMaxWis = document.getElementById('wis').length + myChar.minWis - 1;
  //STR
  var auxArr = [];
  if(myChar.maxStr > actualMaxStr) {
    for(i = (actualMaxStr + 1); i <= myChar.maxStr; i++) {
      auxArr[i] = "<option value='" + i + "'>" + i + "</option>";
    }
    $('#str').append(auxArr.join(''));
  } else if(myChar.maxStr < actualMaxStr) {
    for(i = actualMaxStr; i > myChar.maxStr; i--) {
      $('#str option[value=' + i + ']').remove();
    }
  }
  //CON
  auxArr = []
  if(myChar.maxCon > actualMaxCon) {
    for(i = (actualMaxCon + 1); i <= myChar.maxCon; i++) {
      auxArr[i] = "<option value='" + i + "'>" + i + "</option>";
    }
    $('#con').append(auxArr.join(''));
  } else if(myChar.maxCon < actualMaxCon) {
    for(i = actualMaxCon; i > myChar.maxCon; i--) {
      $('#con option[value=' + i + ']').remove();
    }
  }
  //DEX
  auxArr = []
  if(myChar.maxDex > actualMaxDex) {
    for(i = (actualMaxDex + 1); i <= myChar.maxDex; i++) {
      auxArr[i] = "<option value='" + i + "'>" + i + "</option>";
    }
    $('#dex').append(auxArr.join(''));
  } else if(myChar.maxDex < actualMaxDex) {
    for(i = actualMaxDex; i > myChar.maxDex; i--) {
      $('#dex option[value=' + i + ']').remove();
    }
  }
  //INT
  auxArr = []
  if(myChar.maxInte > actualMaxInte) {
    for(i = (actualMaxInte + 1); i <= myChar.maxInte; i++) {
      auxArr[i] = "<option value='" + i + "'>" + i + "</option>";
    }
    $('#int').append(auxArr.join(''));
  } else if(myChar.maxInte < actualMaxInte) {
    for(i = actualMaxInte; i > myChar.maxInte; i--) {
      $('#int option[value=' + i + ']').remove();
    }
  }
  //WIS
  auxArr = []
  if(myChar.maxWis > actualMaxWis) {
    for(i = (actualMaxWis + 1); i <= myChar.maxWis; i++) {
      auxArr[i] = "<option value='" + i + "'>" + i + "</option>";
    }
    $('#wis').append(auxArr.join(''));
  } else if(myChar.maxWis < actualMaxWis) {
    for(i = actualMaxWis; i > myChar.maxWis; i--) {
      $('#wis option[value=' + i + ']').remove();
    }
  }
}

$(document).ready(function() {
  myChar = new RowClass($('#level').attr('value'));
  $('#row_class').change( function() {
    //Do awesome stuff here
  });
  $("#level").change( function() {
    var values = {};
    $.each($('form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    calculate(values);
    //alert(myChar.toString());
  });
  $('.stat_selector').change( function() {
    alert('FOOOOOOOO');
    var values = {};
    $.each($('form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    myChar.str = values['str'];
    myChar.con = values['con'];
    myChar.dex = values['dex'];
    myChar.inte = values['int'];
    myChar.wis = values['wis'];

    myChar.calculateAndSetBonusPoints();
    $('#bonus_points').text(myChar.bonusPoints);
    alert(myChar.toString( ));
    myChar.calculateStats( );
    
    alert(myChar.toString( ));
    alert('BEEEE');
    setMinMaxStatValues( );
    
    alert('BAAAAAAR');
    alert(myChar.toString( ));
    //calculateHP();
    //calculateMagicPower();
  });
});
