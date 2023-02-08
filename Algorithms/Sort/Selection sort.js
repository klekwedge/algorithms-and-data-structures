function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
}

const arr = [5, 3, 1, 6, 7, 8, 2, 4];
selectionSort(arr);

console.log(arr);

// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]