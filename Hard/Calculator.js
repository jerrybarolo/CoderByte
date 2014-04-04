function Calculator(str) {
  str = str.replace(/\)([0-9\(])/g, ")*$1");
  str = str.replace(/([0-9])\(/g, "$1*(");
  return eval(str);          
}
