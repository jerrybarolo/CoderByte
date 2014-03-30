function BracketMatcher(str) {
  var bracket=[];
  for (var i=0;i<str.length;i++)
  {
    if (str[i]=="(")
    {
      bracket.push(1);
    }
    else if (str[i]==")")
    {
      if (bracket.pop()==null) return 0; // Se chiudo senza avere aperto errore
    }
  }  
  return (bracket.length==0)?1:0;       
}
