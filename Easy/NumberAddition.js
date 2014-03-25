function NumberAddition(str) { 

  var somma = 0;
  str.replace(/\d+/g ,
              function(digit)
              {
                somma += parseInt(digit);
              });
  return somma;
}
