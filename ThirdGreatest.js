function ThirdGreatest(strArr) { 
  var arrayLength = [];
  for(var idx=0;idx<strArr.length;idx++)
  {
      arrayLength[idx] = strArr[idx].length;
  }
  
  var arrLenOrdered = arrayLength.slice(0);
  arrLenOrdered.sort(function(a,b){return a - b;});
  arrLenOrdered.reverse();
  
  var third = arrLenOrdered[0] + 1;
  var count = 0;
  for(var i = 0; i  < arrLenOrdered.length; i++)
  {
    if(arrLenOrdered[i] <= third)
    {
      third = arrLenOrdered[i];
      count++;
      
      if(count === 3) break;
    }
  }
  
  return strArr[arrayLength.lastIndexOf(third)]; 
}
