//
//Ichzilla Javascript file
//

function showHP( ) {
  $('#status_hp').text(myChar.calculateHP());
}

function showMagicPower( ) {
  $('#status_magic_power').text(myChar.calculateMagicPower());
}

function showSkillPoints( ) {
  $('#status_skill_points').text(myChar.calculateSkillPoints());
}

function showDefense( ) {
  $('#status_defense').text(myChar.calculateDefense() + ' (' + myChar.calculateDefensePercentage() + '%)');
}

function calculate(values) {
  switch(values['row_class']) {
  case 'warrior':
    myChar = new Warrior(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'attacker':
    myChar = new Attacker(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'defender':
    myChar = new Defender(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'templar':
    myChar = new Templar(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'assassin':
    myChar = new Assassin(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'archer':
    myChar = new Archer(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'gunner':
    myChar = new Gunner(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'shadow':
    myChar = new Shadow(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'sorcerer':
    myChar = new Sorcerer(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'enchanter':
    myChar = new Enchanter(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'rune':
    myChar = new Rune(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'priest':
    myChar = new Priest(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'cleric':
    myChar = new Cleric(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
    break;
  case 'life':
    myChar = new Life(values['level']);
    myChar.calculateStats( );
    $('#bonus_points').text(myChar.bonusPoints);
    setMinMaxStatValues();
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
    var values = {};
    $.each($('form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    calculate(values)
    showHP();
    showDefense();
    showMagicPower();
    showSkillPoints();
  });
  $('#level').change( function( ) {
    if (isNaN($('#level').val())) { return; } //Stop the script if the value isn't a number.
    var values = {};
    $.each($('form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    calculate(values);
    showHP();
    showDefense();
    showMagicPower();
    showSkillPoints();
  });
  $('.stat_selector').blur( function( ) {
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
    
    showHP();
    showDefense();
    showMagicPower();
    showSkillPoints();
  });
  $('form').submit(function(e) {
    return false;
  });
});
