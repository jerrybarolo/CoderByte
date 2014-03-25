function StringScramble(str1,str2) { 

  var check = true;
  str2 = str2.split("");
  str1 = str1.split("");
  str2.forEach(function(character){
                   var index = str1.indexOf(character);
                   if(index == -1)
                     check = false;
                   else
                     str1.splice(index,1);
               });

  return check;       
}
