function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}


const arr = [5, 3, 1, 6, 7, 8, 2, 4];
bubbleSort(arr);

console.log(arr);
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]