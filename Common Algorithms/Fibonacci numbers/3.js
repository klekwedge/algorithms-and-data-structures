function fibN(n) {
  if (n <= 2) return 1;

  let x = 1;
  let y = 1;
  let ans = 0;

  for (let i = 2; i < n; i++) {
    ans = x + y;
    x = y;
    y = ans;
  }
  return ans;
}

console.log(fibN(10));
// 55