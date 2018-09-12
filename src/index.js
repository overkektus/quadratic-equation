module.exports = function solveEquation(equation) {  
  let equationNoSpace = equation.replace(/ /g,'');
  const arr = Array.from(equationNoSpace);
  let c = [];
  for(let i = arr.length - 1; i > 0; i--) {
    if(isNumeric(arr[i])) {
      c.push(arr[i]);
    } else {
      c.push(arr[i]);
      break;
    }
  }
  c.reverse();
  c = c.join('');
  let s = equationNoSpace.replace(c,"");
  if(s[s.length-1] === '-') {
    s = s.substring(0, s.length - 1);
    s = s + '=' + c;
  } else {
    s = s.substring(0, s.length - 1);
    s = s + '=' + '-' + c;
  }
  let b = [];
  let d = s.replace(c,'');
  d = d.substring(0, d.length - 3)
  const arr2 = Array.from(d);
  for(let i = arr2.length - 1; i > 0; i--) {
    if(isNumeric(arr2[i])) {
      b.push(arr2[i]);
    } else {
      b.push(arr2[i]);
      break;
    }
  }
  let a = Number.parseInt(s);
  b = Number.parseInt(b.reverse().join(''));
  c = Number.parseInt(c);
  console.log(a,b,c);
  let D = (b * b) - 4 * a * c;
  d = Math.round(Math.sqrt(D));
  console.log(D);
  if(D >= 0) {
    X1 = ((-b) + d) / (2 * a);
    X2 = ((-b) - d) / (2 * a);
    console.log(X1, X2)
    const result = [];
    result.push(X2)
    result.push(X1);
    if (result[1] < result[0]) {

      result[0] = result[0] + result[1];
      result[1] = result[0] - result[1];
      result[0] = result[0] - result[1];
    }
    return result;
  } else {

  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}