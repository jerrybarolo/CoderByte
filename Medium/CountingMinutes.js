function converter(str)
{
  str=str.toLowerCase();
  var am=(str.indexOf("am")>-1);
  str=str.replace(/[(am)(pm)]/g,"");
  str=str.split(":");
  if (am)
    return [parseInt(str[0])%12,parseInt(str[1])];
  else
    return [parseInt(str[0])%12+12,parseInt(str[1])]; 
}

function CountingMinutes(str) { 
  var times=str.split("-");
  times[0]=converter(times[0]);
  times[1]=converter(times[1]);
  if (times[1][0]>times[0][0] || times[1][0]==times[0][0] && times[1][1]>=times[0][1])
    return (times[1][0]-times[0][0])*60+times[1][1]-times[0][1];
  else
    return (24-Math.abs(times[0][0]-times[1][0]))*60-times[0][1]+times[1][1];  
}
