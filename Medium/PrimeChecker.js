function PrimeTime(num) { 
  var prime = num != 1;
  for(var i = 2; i < num; i++)
  {
    if(num%i == 0)
    {
      prime = false;
      break;
    }
  }  
  return prime;          
}

function PrimeChecker(num) 
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
  
  for (var i=0;i<res.length;i++)
    if (PrimeTime(res[i])) return 1;
  return 0;
}
