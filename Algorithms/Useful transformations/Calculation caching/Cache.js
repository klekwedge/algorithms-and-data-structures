function factorial(n) {
  console.log("Выполняется вычисление");
  let result = 1;
  while (n) {
    result *= n--;
  }
  return result;
}

factorial(5); // 'Выполняется вычисление'
factorial(5); // 'Выполняется вычисление'
factorial(5); // 'Выполняется вычисление

const cachedFactorial = (() => {
  const cache = {};
  return (n) => {
    if (n in cache) return cache[n];

    console.log("Выполняется вычисление");
    let result = 1;
    for (let i = n; i > 0; i--) {
      result *= i;
    }

    cache[n] = result; // "запоминание" результата
    return result;
  };
})();

cachedFactorial(5); // 'Выполняется вычисление'
cachedFactorial(5); // ...
cachedFactorial(5); // ...

// function addCache(fn) {
//   let cache = {};

//   return function (param) {
//     if (!(param in cache)) {
//       cache[param] = fn.call(this, param);
//     }
//     return cache[param];
//   };
// }
