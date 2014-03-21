function ArithGeo(arr) { 
  var diff = arr[1] - arr[0];
  var mult = arr[1]/arr[0];
  var arithm = true;
  var geomet = true;
  
  for(var idx=2; (idx < arr.length) && (arithm || geomet); idx++)
  {
      if(arr[idx]-arr[idx-1] !== diff)
      {
          arithm = false;
      }
    
      if(arr[idx]/arr[idx-1] !== mult)
      {
          geomet = false;
      }
  }
  
  if(arithm) return "Arithmetic";
  if(geomet) return "Geometric";
  return -1; 
}
