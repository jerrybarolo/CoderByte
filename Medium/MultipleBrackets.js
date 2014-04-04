function MultipleBrackets(str) {
  var arcBracket=[];
  var squareBracket=[];
  var conta=0;
  for (var i=0;i<str.length;i++)
  {
    if (str[i]=="(")
    {
      arcBracket.push(1);
      conta+=1;
    }
    else if (str[i]==")")
    {
      if (arcBracket.pop()==null) return 0; // Se chiudo senza avere aperto errore
    }
    
    if (str[i]=="[")
    {
      squareBracket.push(1);
      conta+=1;
    }
    else if (str[i]=="]")
    {
      if (squareBracket.pop()==null) return 0; // Se chiudo senza avere aperto errore
    }
  }
  
  if(arcBracket.length==0 && squareBracket.length==0) return (1 + " " + conta);
  return 0;
}
