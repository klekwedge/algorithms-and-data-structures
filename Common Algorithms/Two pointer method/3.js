// ? Задача: дан массив из N положительных чисел, надо
// найти в нем несколько чисел, идущих подряд, так,
// чтобы их сумма была больше K,
// а чисел в нем содержалось бы как можно меньше.

function sum(arr, k) {
  let j = 0;
  let sum = 0;
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (sum > k) {
    min = arr.length;
  } else {
    return null;
  }

  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    while (j < arr.length && sum <= k) {
      // начинаем со старого значения j
      sum += arr[j];
      j++;
    }

    if (sum > k) {
      if (j - i < min) {
        min = j - i;
      }
    }

    sum -= arr[i]; // перед началом следующей итерации выкинем число i
  }

  return min;
}

const arr = [1, 1, 1, 1, 7];

console.log(sum(arr, 5));
// 1

const arr2 = [1, 1, 1, 1, 4, 5];
console.log(sum(arr2, 5));
// 2
