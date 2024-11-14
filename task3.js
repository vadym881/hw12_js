function double(x) {
  return x * 2;
}
function square(x) {
  return x * x;
}
function sqrt(x) {
  return Math.sqrt(x);
}

const sequenceFunction = sequence(double, square, sqrt);
console.log(sequenceFunction(4));

function sequence(...funcs) {
  return function (initValue) {
    return funcs.reduce((acc, func) => func(acc), initValue);
  };
}
