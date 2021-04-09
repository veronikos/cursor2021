const double = value => value*2
const pow = value => value*value
function getRandomPassword(digits) {
  if (digits <= 8 && digits > 0) {
    return Math.random().toString().slice(-digits);
  } else if (!digits || digits > 8) {
    return Math.random().toString().slice(-8);
  } else return document.writeln("Function accepts only numbers from 1 to 8");
}

export {
    double,
    pow,
    getRandomPassword
}