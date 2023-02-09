// flatten an array of arrays
const arrayOfArray = [[1, 2], [3, 4], [[5, 6]]];
const flattened = arrayOfArray.reduce((res, a) => [...res, ...a], []);
console.log(flattened); // => [1, 2, 3, 4, [5, 6]]
