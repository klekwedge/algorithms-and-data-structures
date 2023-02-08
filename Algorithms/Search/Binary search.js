function binarySearch(arr, wanted) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2);

    if (arr[middle] === wanted) {
      return middle;
    }

    if (arr[middle] < wanted) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(binarySearch(arr, 8));
// 7
