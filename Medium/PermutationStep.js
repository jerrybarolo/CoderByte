function PermutationStep(num) 
{ 
  var res=[];
  var perm=function(current, set){
    
    if (set.length==0)
    {
        res.push(parseInt(current));
        return;
    }
    
    for (var i=0;i<set.length;i++)
    {
      var aux=set[i];
      set.splice(i,1);
      perm(current+aux,set);
      set.splice(i,0,aux);
    }
  }
  
  var str = ""+num;
  var arr = str.split("");
  perm("",arr);
  
  res.sort();
  for (var i=0;i<res.length;i++)
    if (res[i]>num) return res[i];
  return -1;
}
