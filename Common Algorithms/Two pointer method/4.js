// Найти количество пар элементов a и b в отсортированном массиве,
// такие что b - a > k.

function findEl(arr, k) {
  let second = 0;
  let ans = 0;

  for (let first = 0; first < arr.length; first++) {
    while (second !== arr.length && arr[second] - arr[first] <= k) {
      second++;
    }

    ans += arr.length - second;
  }

  return ans;
}

const arr = [2, 4, 6, 8];

console.log(findEl(arr, 2));
// 3
