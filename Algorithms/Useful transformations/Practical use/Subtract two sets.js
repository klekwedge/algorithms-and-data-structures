// subtract two sets
const s1 = [1, 2, 3, 4, 5];
const s2 = [2, 4];
const subtracted = s1.filter((x) => s2.indexOf(x) < 0);
console.log(subtracted);

// [ 1, 3, 5 ]
