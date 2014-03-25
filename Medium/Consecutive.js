function Consecutive(arr) { 

  arr.sort(function(a,b){return a - b;});
  
  var minNumber = 0;
  
  for(var idx=1;idx<arr.length;idx++)
  {
    if( (arr[idx] - arr[idx-1]) > 1)
      minNumber += arr[idx] - arr[idx-1] - 1;
  }
  
  return minNumber; 
}
