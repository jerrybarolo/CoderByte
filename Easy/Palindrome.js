function Palindrome(str) { 
  str = str.split(" ").join("");
  if(str.length <= 1) return true;
  if(str.charAt(0) != str.charAt(str.length - 1)) return false;
  return Palindrome(str.substr(1, str.length - 2));
}
