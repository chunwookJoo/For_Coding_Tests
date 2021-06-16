const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

const searchString = (arr) => {
  const string = arr[0];
  const char = arr[1];
  let position = 0;
  let count = 0;

  while (true) {
    let found = string.indexOf(char, position);
    if (found == -1) break;
    position = found + char.length;
    count++;
  }
  console.log(count);
};

rl.on("line", (userInput) => {
  arr.push(userInput);
}).on("close", () => {
  searchString(arr);
  process.exit();
});
