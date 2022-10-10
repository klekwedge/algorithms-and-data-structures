// The function takes two objects with different keys,
// some of which may overlap. Need to return first
// object with updated values from second object (only those that match)

obj1 = {
  foo: 'foo',
  bar: 'bar',
};

obj2 = {
  bar: 'foo',
  some: 'some',
};

const margeSameKeysOfObjects = (obj1, obj2) => {
  let keysOfObj1 = Object.keys(obj1);
  let keysOfObj2 = Object.keys(obj2);

  for (let i = 0; i < keysOfObj1.length; i++) {
    let key1 = keysOfObj1[i];
    for (let j = 0; j < keysOfObj2.length; j++) {
      let key2 = keysOfObj2[j];
      if (key1 === key2) {
        obj1[key1] = obj2[key2];
      }
    }
  }

  console.log(obj1);
};

margeSameKeysOfObjects(obj1, obj2); // { foo: 'foo', bar: 'foo' }

const margeSameKeysOfObjects2 = (obj1, obj2) => {
  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }

  console.log(obj1);
};

margeSameKeysOfObjects2(obj1, obj2); // { foo: 'foo', bar: 'foo' }
