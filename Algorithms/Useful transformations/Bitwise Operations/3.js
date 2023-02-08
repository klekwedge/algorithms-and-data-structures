function isEven(number) {
  return (number & 1) === 0;
}

console.log(isEven(2));
console.log(isEven(26533));
console.log(isEven(1212));
console.log(isEven(43));

// true
// false
// true
// false
