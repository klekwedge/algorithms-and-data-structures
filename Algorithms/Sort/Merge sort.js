function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);

  // два подмассива, которые будут сортироваться отдельно
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);

  // слияние отсортированных подмассивов
  return mergeSortedArrays(mergeSort(leftArr), mergeSort(rightArr));
}

function mergeSortedArrays(arr1, arr2) {
  // Результат слияния
  let newArray = [];

  // текущие индексы сравниваемых элементов
  let index1 = 0;
  let index2 = 0;

  // сравнение активных элементов
  while (index1 < arr1.length && index2 < arr2.length) {
    let min = null;
    if (arr1[index1] <= arr2[index2]) {
      min = arr1[index1]; // добавление минимального элемента в массив
      index1++; // сдвиг индекса активного элемента первого массива
    } else {
      min = arr2[index2];
      index2++;
    }

    newArray.push(min);
  }

  return [...newArray, ...arr1.slice(index1), ...arr2.slice(index2)];
}

const arr = [5, 3, 1, 6, 7, 8, 2, 4];

console.log(mergeSort(arr));

// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]
