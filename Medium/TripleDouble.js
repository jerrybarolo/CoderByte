function TripleDouble(num1,num2) { 
  num1=""+num1;
  num2=""+num2;
  var triple=num1.match(/(\d)\1\1/g);
  var double=num2.match(/(\d)\1/g);
  if (triple==null || double==null) return 0;
  for (var i=0;i<triple.length;i++)
  {
    for (var j=0;j<double.length;j++)
    {
      if (triple[i][0]===double[j][0]) return 1;
    }
  }
  return 0;
}
