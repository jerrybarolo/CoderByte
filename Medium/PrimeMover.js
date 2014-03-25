function isPrime(num) 
{ 
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

function PrimeMover(num) 
{ 
  if(num == 1) return 2;
  var contaPrimi = 1;    
  var i = 3;
  var result = 0;
  
  while(contaPrimi < num)
  {  
    if(isPrime(i))
    {
      contaPrimi +=1;
      result = i;
    }
    
    i=i+2;
  }
  
  return result;         
}
