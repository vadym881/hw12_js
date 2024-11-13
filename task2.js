const myCounter = counter(5,3);
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());

function counter(startValue, step) {
  let value = startValue;
  return {
    increment: function () {
      value += step;
      return value;
    },
    decrement: function () {
      value -= step;
      return value;
    },
    reset: function () {
      value = startValue;
      return value;
    },
  };
}
