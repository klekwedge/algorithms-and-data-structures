function apply2dTransform(matrix, vector) {
  return matrix.map((row) => {
    return row.reduce((sum, param, i) => {
      return sum + param * vector[i];
    }, 0);
  });
}

const matrix = [
  [1, 0, 20],
  [0, 1, 50],
  [0, 0, 1],
];

const vector = [10, -10, 1];

console.log(apply2dTransform(matrix, vector));
// [ 30, 40, 1 ]

function createRotateMatrix(deg) {
  let rad = (deg * Math.PI) / 180; // угол в радианах
  return [
    [Math.cos(rad), Math.sin(rad), 0],
    [-Math.sin(rad), Math.cos(rad), 0],
    [0, 0, 1],
  ];
}

console.log(apply2dTransform(createRotateMatrix(90), vector));
// [ -10, -10, 1 ]
