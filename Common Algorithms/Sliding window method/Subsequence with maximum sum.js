// Задача программирования 2: подпоследовательность с максимальной суммой

function maxSumSubsequence(data, n) {
  if (!Array.isArray(data)) {
    return null;
  }

  if (n === 0) {
    return null;
  }

  let bestStart = 0;
  let bestLength = 1;
  let maxSum = data[0];

  let curStart = bestStart;
  let curLength = bestLength;
  let curSum = maxSum;

  for (let i = 1; i < n; i++) {
    if (curSum < 0) {
      curStart = i;
      curLength = 1;
      curSum = data[i];
    } else {
      curLength += 1;
      curSum += data[i];
    }

    if (curSum > maxSum) {
      bestStart = curStart;
      bestLength = curLength;
      maxSum = curSum;
    }
  }

  return { bestStart, bestLength, maxSum };
}

const arr = [2, 5, -8, 3, 9, -2, -4, 0, 2, 6, -3, -5, 0, -4, 2, 3, 1];

console.log(maxSumSubsequence(arr, arr.length));
// { bestStart: 3, bestLength: 7, maxSum: 14 }
