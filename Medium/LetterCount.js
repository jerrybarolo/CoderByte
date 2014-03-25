function countMax(str){
    str=str.toLowerCase();
    var arr={};
    for(i=0; i < str.length; i++)
    {
        var char=str.charAt(i);
        if (arr[char]) 
          arr[char]++;
        else 
          arr[char]=1;
    }
  
    var max=0;
    for (var k in arr)
    {
      if (arr[k]>max) 
        max=arr[k];
    }
  
  return max;
}

function LetterCount(str) {
  str=str.split(" ");
  var max=0, maxi=0;
  for (var i=0;i<str.length;i++)
  {
     var total=countMax(str[i]);
     if (total>max)
     {
       max=total;
       maxi=i;
     }
  }
  
  if(max>1) return str[maxi];
  return -1;
}
