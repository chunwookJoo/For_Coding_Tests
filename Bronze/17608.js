const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showStick = (arr) => {
  let stickNum = arr.shift();
  let max = arr[stickNum - 1],
    count = 1;

  for (let i = stickNum - 2; i >= 0; i--) {
    if (max < arr[i]) {
      max = arr[i];
      count++;
    }
  }
  console.log(count);
  return 0;
};

const arr = [];

rl.on("line", (userInput) => {
  arr.push(userInput);
}).on("close", () => {
  delete arr;
  showStick(arr);
  process.exit();
});
