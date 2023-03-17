// https://youtu.be/3jgE1ySa8xA

let classNames = [
  "header",
  "menu",
  "menu-item",
  "menu-item",
  "menu-item",
  "footer",
  "menu",
  "link",
  "link",
  "link",
  "link",
];

let classNamesCount = {};
let uinqClassNames = [];

for (let i = 0; i < classNames.length; i++) {
  let current = classNames[i];
  if (classNamesCount[current]) {
    classNamesCount[current] += 1;
  } else {
    classNamesCount[current] = 1;
    uinqClassNames.push(current);
  }
}

console.log(uinqClassNames); // [ 'header', 'menu', 'menu-item', 'footer', 'link' ]

let result = uinqClassNames.sort((a, b) => {
  return classNamesCount[b] - classNamesCount[a];
});

console.log(result); // [ 'link', 'menu-item', 'menu', 'header', 'footer' ];

console.table(classNamesCount);
// ┌───────────┬────────┐
// │  (index)  │ Values │
// ├───────────┼────────┤
// │  header   │   1    │
// │   menu    │   2    │
// │ menu-item │   3    │
// │  footer   │   1    │
// │   link    │   4    │
// └───────────┴────────┘