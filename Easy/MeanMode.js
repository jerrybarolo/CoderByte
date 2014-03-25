function MeanMode(arr) { 
  var media = 0;
  var mediano = 0;
  var somma = 0;
  
  for(var idx = 0; idx<arr.length;idx++)
  {
    somma += arr[idx];
  }
  
  media = somma/arr.length; 
  mediano = arr[Math.round(arr.length/2) - 1];
  
  if(media === mediano)
    return 1; 
  else
    return 0;         
}
