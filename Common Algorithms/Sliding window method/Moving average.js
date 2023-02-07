// Задача программирования 1: скользящее среднее

function movingAverage(arr, n, k) {
  if (!Array.isArray(arr)) {
    return null;
  }

  if ((k < 0 && k > n) || n === 0) {
    return null;
  }

  const result = [];
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  result[0] = sum / k;

  for (let i = k; i < n; i++) {
    sum = sum - arr[i - k] + arr[i];
    result[i - k + 1] = sum / k;
  }

  return result;
}

const arr = [1, 5, 6, 8, 6, 4, 9, 1, 6, 0, 8, 3];

console.log(movingAverage(arr, arr.length, 4));

// [
//     5, 6.25, 6, 6.75,
//     5,    5, 4, 3.75,
//  4.25
// ]