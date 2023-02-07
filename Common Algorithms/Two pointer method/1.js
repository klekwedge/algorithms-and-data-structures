// ? Задача
// Для заданного отсортированного в возрастающем порядке массива
// A целых чисел длины n и целого числа X определить, существует
// ли в нем два различных элемента A[i] и A[j], такие что A[i] + A[j] = X.

function isPairSum(arr, x) {
  // левый указатель
  let i = 0;
  // правый указатель
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === x) {
      return true;
    } else if (arr[i] + arr[j] < x) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}

const arr = [10, 20, 35, 50, 75, 80];
console.log(isPairSum(arr, 70));
