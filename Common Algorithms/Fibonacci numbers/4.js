// «Правильная» рекурсия, работающая за линейное время

const fib2 = (n) => {
  if (n == 0) {
    return [0, 1];
  } else {
    const [prev, next] = fib2(n - 1);
    return [next, prev + next];
  }
};

const fib = (n) => fib2(n)[0];

console.log(fib(10));
// 55