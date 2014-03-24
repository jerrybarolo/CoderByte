function SecondGreatLow(arr) { 
  arr.sort(function(a,b){return a - b;});
  var minNum = arr.shift();
  var maxNum = arr.pop();
        
  for(var idx = 0; idx < arr.length; idx++)
  {
    if(arr[idx] > minNum)
    {
      minNum = arr[idx];
      break;
    }
  }
        
  for(var idx = arr.length - 1; idx >= 0; idx--)
  {
    if(arr[idx] < maxNum)
    {
      maxNum = arr[idx];
      break;
    }
  }
  
  return (minNum+" "+maxNum);         
}
