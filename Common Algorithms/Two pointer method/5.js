// Слияние
// Пусть у нас есть два отсортированных по неубыванию массива размера n
// и m. Хотим получить отсортированный массив размера n + m из исходных.

function getNewArr(arr1, arr2) {
  const res = [];

  let i = 0;
  let j = 0;

  for (let k = 0; k < arr1.length + arr2.length; k++) {
    if (arr1[i] < arr2[j] || j === arr2.length) {
      res[k] = arr1[i];
      i++;
    } else {
      res[k] = arr2[j];
      j++;
    }
  }

  return res;
}

const arr1 = [2, 4, 6, 8];
const arr2 = [1, 3, 5, 7];

console.log(getNewArr(arr1, arr2));
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]