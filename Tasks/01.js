// Write a one-line solution that calculates the sum of the square roots
// of all even numbers in an integer array.

const arr = [1, 5, 8, 6, 231, 5, 7, 2, 4, 554, 771, 21];
console.log(
  arr.filter((item) => item % 2 === 0).reduce((acc, el) => acc + Math.sqrt(el) , 0)
);

// 32.229335021782106
