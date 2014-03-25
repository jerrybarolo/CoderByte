function SimpleMode(arr) { 

  var arrayNumOccurence = [];
  var max = 1;
  var maxOccNum = -1;
  
  arr.forEach(function(element)
  {
      if(arrayNumOccurence[element])
         arrayNumOccurence[element] += 1;
      else
        arrayNumOccurence[element] = 1;
    
      if(arrayNumOccurence[element] > max)
      {
        max = arrayNumOccurence[element];
        maxOccNum = element;
      } 
  });

  return maxOccNum;      
}
