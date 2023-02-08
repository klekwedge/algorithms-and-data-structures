function union(set1, set2) {
  let result = new Set(set1);
  for (let el of set2) {
    result.add(el);
  }
  return result;
}

function union2(set1, set2) {
  return new Set([...set1, ...set2]);
}

const set1 = new Set([1, 2, 3, 5, 6, 8, 9, 90]);
const set2 = new Set([876, 11]);

console.log(union(set1, set2));
console.log(union2(set1, set2));

// Set(10) { 1, 2, 3, 5, 6, 8, 9, 90, 876, 11 }
// Set(10) { 1, 2, 3, 5, 6, 8, 9, 90, 876, 11 }
