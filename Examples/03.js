// https://youtu.be/dsSwNv5edfM

function findVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}

console.log(findVowels("hello")); // 2
console.log(findVowels("why")); // 0

function findVowels2(str) {
  const matched = str.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
}

console.log(findVowels2("hello")); // 2
console.log(findVowels2("why")); // 0
