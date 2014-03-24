function VowelCount(str) { 
  var matches = [];
  matches = str.match(/[aeiou]/gi);
  if(matches !== null)
  {
    return matches.length;
  }
  else
  {
    return 0; 
  }       
}
