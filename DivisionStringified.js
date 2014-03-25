function DivisionStringified(num1,num2) 
{  
  var str="";
  var res="" + Math.round(num1/num2); // trasformiamo il numero in stringa
  for (var i=0;i<res.length;i++)
  {
    str=res[res.length-1-i]+""+str;
    if ((i+1)%3==0 && i < res.length-1) str=","+str;
  }
  return str;      
}
