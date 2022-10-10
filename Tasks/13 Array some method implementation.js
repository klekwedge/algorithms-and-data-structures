// some
const someOfThis = ['Java', 'JavaScript', 'Python'];

const some = (arr, fn) => {
  const filteredArr = [];

  for (let elem of arr) {
    if (fn(elem)) {
      return true
    }
  }

  return false;
};

console.log(some(someOfThis, (elem) => elem === 'Java')); // true
console.log(some(someOfThis, (elem) => elem === 'C#')); // false
