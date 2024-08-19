module.exports = function toReadable (number=0) {
  const strNumber = number.toString();
  let result = '';
  let n = ""; //parameter for digits
  let p = ""; //parameter for dozens
   let t = ""; //parameter for numbers from ten to twenty


  if (strNumber.length === 1) {
        result = digitsReturn(strNumber);

  } else if (strNumber.length === 2 && number % 10 === 0) {
        result = dozensReturn(strNumber);
  } else if (strNumber.length ===2 && number % 10 !== 0) {

      if (number < 20) {
          result = `${tenToTwentyReturn(strNumber)}`;
      } else result = `${dozensReturn(strNumber[0] + '0')} ${digitsReturn(strNumber[1])}`;
  }

    else if (strNumber.length === 3 && number % 100 === 0) {
        result = `${digitsReturn(strNumber[0])} hundred`;
  } else if (strNumber.length === 3 && strNumber.endsWith("0")) {
        result = `${digitsReturn(strNumber[0])} hundred ${dozensReturn(strNumber.slice(1))}`;
  } else if (strNumber.length === 3 && strNumber[2] !== "0") {

          if (strNumber[1] === '0') {
              result = `${digitsReturn(strNumber[0])} hundred ${digitsReturn(strNumber[2])}`;
          }
          else if (strNumber[1] === '1') {
              result = `${digitsReturn(strNumber[0])} hundred ${tenToTwentyReturn(strNumber.slice(1))}`;
          }
          else
              result = `${digitsReturn(strNumber[0])} hundred ${dozensReturn(strNumber.slice(1,2) + '0')} ${digitsReturn(strNumber[2])}`;

  } else if (strNumber === '1000') {
        result = 'one thousand';
  } else if (strNumber.length > 4) {
        result = 'Too much!';
  }

  function digitsReturn (n) {
    switch (n) {
        case '0': return 'zero';
        case '1': return 'one'; //break;
        case '2': return 'two'; //break;
        case '3': return 'three'; //break;
        case '4': return 'four'; //break;
        case '5': return 'five'; //break;
        case '6': return 'six'; //break;
        case '7': return 'seven'; //break;
        case '8': return 'eight'; //break;
        case '9': return 'nine'; //break;
    }
  }
  function dozensReturn (p) {
      switch (p) {
          case '10':
              return 'ten'; //break;
          case '20':
              return 'twenty'; //break;
          case '30':
              return 'thirty'; //break;
          case '40':
              return 'forty'; //break;
          case '50':
              return 'fifty'; //break;
          case '60':
              return 'sixty'; //break;
          case '70':
              return 'seventy'; //break;
          case '80':
              return 'eighty'; //break;
          case '90':
              return 'ninety';
      }
  }

      function tenToTwentyReturn (t) {
          switch (t) {
              case '11': return 'eleven';
              case '12': return 'twelve';
              case '13': return 'thirteen';
              case '14': return 'fourteen';
              case '15': return 'fifteen';
              case '16': return 'sixteen';
              case '17': return 'seventeen';
              case '18': return 'eighteen';
              case '19': return 'nineteen';//break;
          }

    } return  result;
}
