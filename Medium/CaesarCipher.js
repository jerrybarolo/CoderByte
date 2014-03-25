function CaesarCipher(str,num) {
  
  return str.replace(/[a-zA-Z]/g,
         function(character)
         {
            var charCode = character.charCodeAt(0);
            if (charCode >= 65 && charCode <= 90)
            {
              charCode=((charCode-65+num)%(26))+65;
            }
            else if (charCode >= 97 && charCode <= 122)
            {
              charCode=((charCode-97+num)%(26))+97;
            }
         
            return String.fromCharCode(charCode);
         });

  return res;         
}
