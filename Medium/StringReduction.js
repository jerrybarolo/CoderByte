function finito(str)
{
  var char = str[0];
  for(var i=1;i<str.length;i++)
  {    
    if(str[i] !== char)
    {
      return false;
    }
      
    char = str[i];
  }
  
  return true;
}

function StringReduction(str) { 

  var array = [];
  array["ab"] = array["ba"] = "c";
  array["ac"] = array["ca"] = "b";
  array["bc"] = array["cb"] = "a";
  
  while(!finito(str))
  {
    for(var i=0;i<str.length-1;i++)
    {
      if(str[i] !== str[i+1])
      {
          if(i>0 && i<str.length-2)
          {
            str = str.slice(0,i) + array[str[i]+str[i+1]] + str.slice(i+2);
          }
          else if(i==str.length-2)
          {
            str = str.slice(0,i) + array[str[i]+str[i+1]];
          }
          else if(i==0)
          {
            str = array[str[i]+str[i+1]] + str.slice(i+2);
          }
      }
    } 
  }
  
  return str.length;
}
