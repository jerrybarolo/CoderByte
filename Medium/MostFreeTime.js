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

function MostFreeTime(strArr) { 
  var eventStartEnd=[];
  for(var i=0;i<strArr.length;i++)
  {
    eventStartEnd[i]=strArr[i].split("-");
    eventStartEnd[i][0]=converter(eventStartEnd[i][0]);
    eventStartEnd[i][1]=converter(eventStartEnd[i][1]);      
  }
 
  eventStartEnd.sort(
    function(a,b)
    {
       var diffHour = a[0][0] - b[0][0];
       var diffMin = a[0][1] - b[0][1];
       if(diffHour)
         return diffHour;
      else
         return diffMin;
    });
  
  var diffMin = [];  

  for(var i=0;i<strArr.length - 1;i++)
  {
    var diffHourMin = 60*(eventStartEnd[i][1][0] - eventStartEnd[i+1][0][0]);
    diffMin[i]  = Math.abs(diffHourMin + eventStartEnd[i][1][1] - eventStartEnd[i+1][0][1]); 
  }     
  
  var max=diffMin[0];
  var result="";
  
  var hour = parseInt(diffMin[0]/60);
  if(hour<10) result+="0";
  result += hour + ":";
  var min = diffMin[0]%60;
  if(min<10) result+="0";
  result += min;
  
  for(var i=0;i<diffMin.length;i++)
  {    
    if(diffMin[i]>max)
    {
      result="";
      max=diffMin[i];
      var hour = parseInt(diffMin[i]/60);
      if(hour<10) result+="0";
      result += hour + ":";
      var min = diffMin[i]%60;
      if(min<10) result+="0";
      result += min;
    }
  }
   
  return result;
}
