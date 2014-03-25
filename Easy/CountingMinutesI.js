function CountingMinutesI(str) { 
  str = str.split("-");

  str[0] = str[0].split(":");
  
  var hour = str[0].shift();
  var index = 0;
  var stringa = str[0].toString();
  (stringa.indexOf("a") !== -1) ? index = stringa.indexOf("a") : index = stringa.indexOf("p");
  var minute = stringa.substr(0,index);
  var halfDay = stringa.substr(index);
  
  str[1] = str[1].split(":");
  
  var hour2 = str[1].shift();
  var index2 = 0;
  var stringa2 = str[1].toString();
  (stringa2.indexOf("a") !== -1) ? index2 = stringa2.indexOf("a") : index2 = stringa2.indexOf("p");
  var minute2 = stringa2.substr(0,index2);
  var halfDay2 = stringa2.substr(index2);
  
  var diff = 0;  
  var diffHour = hour2 - hour;
  var diffMin = minute2 - minute;
  if((halfDay !== halfDay2))
    diff = 12*60;
  else if(diffHour == 0 && diffMin < 0)
    diff = 24*60;
  
  return (diff + diffMin + diffHour*60);
}
