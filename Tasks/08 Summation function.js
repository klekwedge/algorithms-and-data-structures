// Implement a function that will sum up
// the numbers and output to the logs

function sum(n) {
  console.log(n);

  return function (a) {
    return sum(a + n);
  };
}

sum(5); // 5
sum(1)(2); // 1 3
sum(1)(2)(1); // 1 3 4
