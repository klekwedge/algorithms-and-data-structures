let classNames = [
  'header',
  'menu',
  'menu-item',
  'menu-item',
  'menu-item',
  'footer',
  'menu',
  'link',
  'link',
  'link',
  'link',
];

let classNamesCount = {};

for (let i = 0; i < classNames.length; i++) {
  let current = classNames[i];

  if (classNamesCount[current]) {
    classNamesCount[current]++;
  } else {
    classNamesCount[current] = 1;
  }
}

console.log(classNamesCount); // { header: 1, menu: 2, 'menu-item': 3, footer: 1, link: 4 }

let result = Object.keys(classNamesCount).sort(
  (a, b) => classNamesCount[b] - classNamesCount[a]
);

console.log(result); // [ 'link', 'menu-item', 'menu', 'header', 'footer' ]
