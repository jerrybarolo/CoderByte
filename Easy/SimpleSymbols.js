function SimpleSymbols(str) { 
  for(var i=0;i<str.length;i++)
  {
    if(str[i] >= "a" && str[i] <= "z")
    {
        if(i===0 || i===str.length-1) return false;
        if(str[i-1] !== "+" || str[i+1] !=="+") return false;          
    }
  }

  return true;         
}
