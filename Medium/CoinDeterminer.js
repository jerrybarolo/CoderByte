function cicla(residuo)
{
  var arr = [1,5,7,9,11];
  
  for(var i=1;i<arr.length;i++)
  {
    if(residuo<arr[i])
    {
      return parseInt(residuo/arr[i-1] + residuo%arr[i-1]);
    }
  }
  
   var min11 = parseInt(residuo/11 + cicla(residuo%11));
   var min9 = parseInt(residuo/9 + cicla(residuo%9));
   var min = min11 < min9 ? min11 : min9;
   return min;
}

function CoinDeterminer(num)
{
  return cicla(num);
}
