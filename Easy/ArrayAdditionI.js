function findSubSum( target , a )
{
  if( a.length == 1 )
    return (a[0] == target);
  if( a[0] == target )
    return true;
  var i = a.shift();
  if( i > target )
    return findSubSum( target , a.slice(0) );
  else
    return findSubSum( target , a.slice(0) ) || findSubSum( target - i , a.slice(0) );
}
 
function ArrayAdditionI(arr)
{ 
  arr = arr.sort(function(a,b){return a -b;});
  var  target = arr.pop();
  return findSubSum( target , arr );
}
