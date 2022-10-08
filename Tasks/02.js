// Write a function that writes a number in the given range
// to the console if it is successfully divided or not
// divided with or without a remainder, depending on the parameters.

function rangeFunc(start, end, divider) {
  for (let i = start; i <= end; i++) {
    if (i % divider === 0) {
      console.log(i);
    }
  }
}

rangeFunc(1, 5, 2); // 2 4
