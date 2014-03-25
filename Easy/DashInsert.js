function DashInsert(num) {  
  var str = num+"";
  return str.replace(/([13579])(?=[13579])/g, '$1-');
}
