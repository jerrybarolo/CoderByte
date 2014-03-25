function Division(num1,num2) { 

  var max = 0;
  num1 > num2 ? max = num1 : max = num2;
  var GCF = 1;
  
  for(var i = 0; i < max; i++)
  {
     if(num1%i == 0 && num2%i == 0)
     {
       GCF = i;
     }
  }
  
  return GCF; 
}
