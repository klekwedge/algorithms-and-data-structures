// fromPairs
const pairs = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const asObjects = pairs.reduce(
  (res, [key, value]) => ({ ...res, [key]: value }),
  {}
);

console.log(asObjects); // => { a: 1, b: 2, c: 3  }
