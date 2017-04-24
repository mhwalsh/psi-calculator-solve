var calculateMe = function(objToCalc) {
  console.log('in calculateMe, objToCalc=', objToCalc);

  var x = parseFloat(objToCalc.x);
  var y = parseFloat(objToCalc.y);
  var operator = objToCalc.type; // add, sub, etc

  var finalAnswer;

  switch (operator) {
    case 'add':
      finalAnswer = x + y;
      break;
    case 'sub':
      finalAnswer = x - y;
      break;
    case 'mult':
      finalAnswer = x * y;
      break;
    case 'div':
      finalAnswer = x / y;
      break;
    default:
      console.log('error, i do not know this operator');
  }

  return finalAnswer;
}

module.exports = calculateMe;
