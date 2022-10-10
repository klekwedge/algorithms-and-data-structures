// Rewrite the clone function so that it can clone the object passed
// as a parameter.

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let animal = {
  name: 'animal',
  age: 10,
  childs: ['child 1', 'child 2'],
};

let cat = clone(animal);
cat.name = 'cat';
cat.age = 5;
cat.childs.push('child 3');

console.log(cat.name, cat.age); // cat 5
console.log(cat.childs); // [ 'child 1', 'child 2', 'child 3' ]

console.log(animal.name, animal.age); // animal 10
console.log(animal.childs); // [ 'child 1', 'child 2' ]
