// рекурсия

function fibonacchi(n) {
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }
  return fibonacchi(n - 2) + fibonacchi(n - 1);
}

console.log(fibonacchi(10));
// 55
