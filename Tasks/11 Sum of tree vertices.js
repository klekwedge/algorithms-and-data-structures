const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
          },
        ],
      },
    ],
  },
  {
    v: 12,
    c: [
      {
        v: 4,
        c: [
          {
            v: 6,
          },
        ],
      },
      {
        v: 12,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 6,
        c: [
          {
            v: 3,
          },
        ],
      },
    ],
  },
  {
    v: 9,
    c: [
      {
        v: 2,
        c: [
          {
            v: 8,
          },
        ],
      },
      {
        v: 9,
        c: [
          {
            v: 1,
          },
        ],
      },
    ],
  },
];

const recursive = (tree) => {
  let sum = 0;
  tree.forEach((node) => {
    sum += node.v;

    if (!node.c) {
      return node.v;
    }
    sum += recursive(node.c);
  });

  return sum;
};

console.log(recursive(tree)); // 121

const iteration = (tree) => {
  if (!tree.length) {
    return 0;
  }

  const stack = [];
  let sum = 0;
  tree.forEach((node) => {
    stack.push(node);
  });

  while (stack.length) {
    const node = stack.pop();
    sum += node.v;

    if (node.c) {
      node.c.forEach((n) => {
        stack.push(n);
      });
    }
  }

  return sum;
};

console.log(iteration(tree)); // 121