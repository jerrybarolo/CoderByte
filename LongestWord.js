function LongestWord(sen) { 

  // code goes here
  arrayStrings = sen.split(/[^a-zA-Z]/);
  return arrayStrings.sort(function (a, b) { return b.length - a.length; })[0];
}
