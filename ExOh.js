function ExOh(str) { 
  if ( (str.match(/x/g) === null) || (str.match(/o/g) === null ) ) return false;
  return str.match(/x/g).length === str.match(/o/g).length; 
}
