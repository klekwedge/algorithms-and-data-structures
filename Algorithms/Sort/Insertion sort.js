function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = i;

    while (arr[current - 1] !== undefined && arr[current] < arr[current - 1]) {
      [arr[current - 1], arr[current]] = [arr[current], arr[current - 1]];
      current--;
    }
  }
}

const arr = [5, 3, 1, 6, 7, 8, 2, 4];
insertionSort(arr);

console.log(arr);
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]