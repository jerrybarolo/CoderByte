function BinaryConverter(str) { 

  str = str.split("");
  var decimale = 0;
  for(var idx=0;idx<str.length;idx++)
  {
    decimale += str[idx]*Math.pow(2 , str.length - 1 - idx);
  }
   
  return decimale; 
}
