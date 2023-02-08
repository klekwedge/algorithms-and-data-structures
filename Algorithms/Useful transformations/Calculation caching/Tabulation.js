function fibonacciTabulation(n) {
  let cache = [];
  cache[0] = 0;
  cache[1] = 1;
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 2] + cache[i - 1];
  }
  return cache[n];
}
