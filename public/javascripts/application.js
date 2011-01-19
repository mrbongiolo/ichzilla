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
  $('#resul').text(base_hp + row_class_hp);
}

$(document).ready(function() {
  $("input[type='text']").change( function() {
    calculateHP();
  });
  $('select').change( function() {
    calculateHP();
  });
});
