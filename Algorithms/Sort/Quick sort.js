function quickSort(arr, start, end) {
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = arr.length - 1;
  }

  if (start >= end) {
    return;
  }

  // индекс опорного элемента
  let pivot = partition(arr, start, end);

  // рекурсивная сортировка подмассивов
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
}

function partition(arr, start, end) {
  // Берем в качестве опорного последний элемент подмассива
  let pivotValue = arr[end];

  // изначально считаем, что pivotValue минимальное значение
  // и должно находиться в начале массива
  let pivotIndex = start;

  // перебираем все элементы
  for (let i = start; i < end; i++) {
    // значения меньше опорного перемещаем перед ним
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  // ставим опорный элемент в нужное место
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

  return pivotIndex;
}

const arr = [5, 3, 1, 6, 7, 8, 2, 4];
quickSort(arr);

console.log(arr);

// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]
