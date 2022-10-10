// Exit the loop by changing only the two marked lines. 
// The result in the console now stops at 9 9. Should be at 5 4.

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 10; j++) {
    if (i === 5 && j === 5) {
      break;
    }

    console.log(i, j);
  }
}
