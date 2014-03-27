function SwapII(str) 
{ 
  return str.replace(/[a-zA-Z]/g , 
              function(character)
              {
                var charCode = character.charCodeAt(0);
                if(charCode >= 97 && charCode <= 122)
                {
                    return character.toUpperCase();
                }             

                if(charCode >= 65 && charCode <= 90)
                {
                    return character.toLowerCase();
                }              
              })
              .replace(/(\d)[a-zA-Z]+(\d)/g , 
                 function(all, dig1, dig2)
                 {
                   return dig2 + all.slice(1,-1) + dig1;
                 });             
}
