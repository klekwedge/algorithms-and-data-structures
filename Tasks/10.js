// Implement a function that takes two parameters:
// array of values
// callback, by the result of which the values will be grouped
// The function must return a compound aggregate object where the
// keys are the names of the groups and the values are the groups themselves.

const groupBy = (arr, callbackFunction) => {
  const result = {};
  arr.forEach((item) => {
    let resultAfterCallback = callbackFunction(item);
    result[resultAfterCallback]
      ? result[resultAfterCallback].push(item)
      : (result[resultAfterCallback] = [item]);
  });

  console.log(result);
};

groupBy([6.1, 4.5, 6.4], Math.floor); // { '4': [ 4.5 ], '6': [ 6.1, 6.4 ] }
