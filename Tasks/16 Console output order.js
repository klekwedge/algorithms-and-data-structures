setTimeout(() => {
  console.log('1');
}, 0);

setTimeout(() => {
  console.log('2');
}, 100);

console.log('3');

// 3
// 1
// 2