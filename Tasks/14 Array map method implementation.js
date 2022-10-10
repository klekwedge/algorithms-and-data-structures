// map
const mapMe = [1000, 800, 2400, 500];

const map = (arr, fn) => {
  const mappedArr = [];

  for (let elem of arr) {
    mappedArr.push(fn(elem));
  }

  return mappedArr;
};

console.log(map(mapMe, (elem) => elem + 200)); // [ 1200, 1000, 2600, 700 ]
