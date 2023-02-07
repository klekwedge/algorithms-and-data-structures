// Задача: Дан массив, поверните массив вправо
// на k шагов, где k неотрицательно. Например,
// если наш входной массив равен [1, 2, 3, 4, 5, 6, 7]
// и k равен 4 , то вывод должен быть [4, 5, 6, 7, 1, 2, 3].

function rotate(arr, step) {
  step %= arr.length;

  reverse(arr, 0, arr.length - 1);
  console.log(arr);
//   [
//     7, 6, 5, 4,
//     3, 2, 1
//   ]

  reverse(arr, 0, step - 1);
  console.log(arr);
//   [
//     4, 5, 6, 7,
//     3, 2, 1
//   ]

  reverse(arr, step, arr.length - 1);
  console.log(arr);
//   [
//     4, 5, 6, 7,
//     1, 2, 3
//   ]

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(rotate(arr, 4));
// [
//     4, 5, 6, 7,
//     1, 2, 3
// ]