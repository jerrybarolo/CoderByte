function PrimeTime(num) { 
  var prime = num != 1;
  for(var i = 2; i < num; i++)
  {
    if(num%i == 0)
    {
      prime = false;
      break;
    }
  }  
  return prime;          
}
