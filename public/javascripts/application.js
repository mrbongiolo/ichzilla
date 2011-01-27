//
//Ichzilla Javascript file
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

//Formula (atleast for caster classes):
//
//  magic = ((INT - 20) * 3.1) + ((WIS - 20) * 2)
//
//source: http://forum.ruinsofwar.com/viewtopic.php?f=27&t=6719
function calculateMagicPower() {
  var values = {};
  $.each($('form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });
  var row_class_magic = Math.floor(((values['int'] - 20) * 3.1) + ((values['wis'] - 20) * 2));
  $('#status_magic_power').text(row_class_magic);
}

$(document).ready(function() {
  $("input[type='text']").change( function() {
    calculateHP();
    calculateMagicPower();
  });
  $('select').change( function() {
    calculateHP();
    calculateMagicPower();
  });
});
