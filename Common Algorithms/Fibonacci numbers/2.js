// рекурсия + мемоизация

let results = [0, 1];

function fibonacchi(n) {
  if (n == 0) return results[0];

  if (n == 1) return results[1];

  if (!results[n]) {
    results[n] = fibonacchi(n - 2) + fibonacchi(n - 1);
  }
  return results[n];
}

console.log(fibonacchi(10));
// 55