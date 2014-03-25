function isPalindrome(str)
{
  if(str.length <= 1) return true;
  if(str.charAt(0) != str.charAt(str.length - 1)) return false;
  return isPalindrome(str.substr(1, str.length - 2));
}

function PalindromeTwo(str) {
  str = str.match(/[a-zA-Z]/g);  
  str = str.join("");
  str = str.replace(/[A-Z]/g, function(character){return character.toLowerCase();});

  return isPalindrome(str);
}
