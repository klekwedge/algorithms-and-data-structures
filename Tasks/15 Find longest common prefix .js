function getCommonPrefix(prefix, str) {
  let result = '';

  for (let i = 0, j = 0; i < prefix.length && j < str.length; i++, j++) {
    if (prefix[i] !== str[j]) {
      break;
    }
    result += prefix[i];
  }

  return result;
}

function getLongestCommonPrefix(arr) {
  let prefix = arr[0];

  for (let i = 0; i < arr.length; i++) {
    prefix = getCommonPrefix(prefix, arr[i]);
  }

  return prefix;
}

const arr = ['abc123', 'abcd123', 'abcde123', 'abcdefg123'];
console.log(getLongestCommonPrefix(arr)); // abc

const arr2 = ['abc123', 'abcd123', 'abcde123', 'abdefg123'];
console.log(getLongestCommonPrefix(arr2)); // ab

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

function getCommonPrefix2(prefix, str) {
  let result = '';

  for (let i = 0, j = 0; i < prefix.length && j < str.length; i++, j++) {
    if (prefix[i] !== str[j]) {
      break;
    }
    result += prefix[i];
  }

  return result;
}

function getLongestCommonPrefix2(arr) {
  arr.sort();

  const minLen = Math.min(arr[0].length, arr[arr.length - 1].length);

  let i = 0;
  while (i < minLen && arr[0][i] === arr[arr.length - 1][i]) {
    i++;
  }

  return arr[0].substring(0, i);
}

const arr3 = ['abc123', 'abcd123', 'abcde123', 'abcdefg123'];
console.log(getLongestCommonPrefix2(arr3)); // abc
