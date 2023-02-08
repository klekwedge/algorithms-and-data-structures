function difference(set1, set2) {
  let result = new Set(set1);
  for (let el of set2) {
    result.delete(el);
  }
  return result;
}

// или

function difference2(se1, set2) {
  return new Set([...set1].filter((el) => !set2.has(el)));
}

const set1 = new Set([1, 2, 3, 11, 5, 6, 8, 9, 90]);
const set2 = new Set([1, 2, 3, 11, 5]);

console.log(difference(set1, set2));
console.log(difference2(set1, set2));

// Set(4) { 6, 8, 9, 90 }
// Set(4) { 6, 8, 9, 90 }
