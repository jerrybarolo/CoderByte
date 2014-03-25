function RunLength(str) { 
  var encoding = "";
  str.match(/(.)\1*/g).forEach(function(substr){encoding += substr.length + substr[0];});  
  return encoding;         
}
