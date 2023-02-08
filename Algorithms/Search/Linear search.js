function linearSearch(arr, wanted) {
  let found = [];
  arr.forEach((el, i) => {
    if (el === wanted) {
      found.push(i);
    }
  });
  return found;
}

const arr = [5, 3, 1, 6, 7, 8, 2, 4];

console.log(linearSearch(arr, 3));
// [ 1 ]
