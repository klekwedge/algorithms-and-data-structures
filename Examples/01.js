// https://youtu.be/eXjUz2Kuuw4

function palindrome(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  return str === str.split("").reverse().join("");
}

console.log(palindrome("aaa")); // true
console.log(palindrome("caa")); // false
console.log(palindrome("Anna")); // true
console.log(palindrome("А роза упала на лапу Азора")); // true

function palindrome2(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  const len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome2("aaa")); // true
console.log(palindrome2("caa")); // false
console.log(palindrome2("Anna")); // true
console.log(palindrome2("А роза упала на лапу Азора")); // true
