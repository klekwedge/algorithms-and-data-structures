function intersection(set1, set2) {
  let result = new Set();
  for (let el of set2) {
    if (set1.has(el)) result.add(el);
  }
  return result;
}

// или

function intersection2(set1, set2) {
  return new Set([...set1].filter((el) => set2.has(el)));
}

const set1 = new Set([1, 2, 3, 11, 5, 6, 8, 9, 90]);
const set2 = new Set([876, 11]);

console.log(intersection(set1, set2));
console.log(intersection2(set1, set2));

// Set(1) { 11 }
// Set(1) { 11 }
