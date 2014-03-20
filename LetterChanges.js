function LetterChanges(str) { 
  return str.replace(/[a-zA-Z]/g,
         function(character)
         {
           if (character === "z" || character === "Z") return "a";
           else{return String.fromCharCode(String.charCodeAt(character) + 1);}
         }).replace(/[aeiou]/g, function(character){return character.toUpperCase();});         
}
