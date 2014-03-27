function NumberSearch(str) { 
  var sum = 0;
  var letterCount = 0;
  str.replace(/\d/g, function(digit){sum += parseInt(digit)});
  str.replace(/[a-zA-Z]/g, function(letter){letterCount += 1;});
  return Math.round(sum/letterCount); 
}
