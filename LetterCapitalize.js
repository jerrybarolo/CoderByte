function LetterCapitalize(str) { 
  return str.split(" ").map(function(w) {return w.charAt(0).toUpperCase() + w.substr(1) }).join(" ");         
}
