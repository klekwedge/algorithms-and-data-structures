function fibonacciMemoization(n) {
  let cache = {};

  let recursive = (n) => {
    // член последовательности уже был посчитан
    if (n in cache) return cache[n];
    // вычисление n-ного члена и сохранение его в кэше
    let result;
    if (n < 2) result = n;
    else result = recursive(n - 2) + recursive(n - 1);
    cache[n] = result;
    return cache[n];
  };

  return recursive(n);
}
