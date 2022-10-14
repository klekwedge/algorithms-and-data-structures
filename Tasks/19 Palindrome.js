// Given a string; you need to write a function that allows
// you to return true if the string is a palindrome,
// and false otherwise. In this case, spaces and punctuation
// marks must be taken into account.

const palindrome = (str) => {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
};

console.log(palindrome('racecar')); // true
console.log(palindrome('table')); // false
