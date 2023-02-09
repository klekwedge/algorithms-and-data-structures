// remove object from array by property

const initial = [
  { id: 1, score: 1 },
  { id: 2, score: 2 },
  { id: 3, score: 4 },
];
const removeId = 3;
const without3 = initial.filter((x) => x.id !== removeId);
console.log(without3); // => [ { id: 1, score: 1  }, { id: 2, score: 2  }  ]
