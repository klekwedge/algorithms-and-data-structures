const map = new Map();

const obj = { id: 5 };

map.set('name', 'John');
map.set(obj, 'John');

console.log(map.get('name')); // John
console.log(map.get(obj)); // John