function FibonacciChecker(num) { 

  if(num===1) return "yes";
  
  var prec=1;
  var curr=1;
  var next=0;
  while(next<=num)
  {
    next=prec+curr;
    var tmp=curr;
    curr += prec;
    prec = tmp;
    
    if(next===num) return "yes";
  }
  
   return "no";         
}
