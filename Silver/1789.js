const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (userInput) => {
  const input = Number(userInput);
  let sum = 0;
  let cnt = 0;

  for (let i = 1; sum < input; i++) {
    if (sum + i <= input) {
      sum += i;
      cnt++;
    }
    if (sum + i > input) {
      console.log(cnt);
      break;
    }
  }
}).on("close", () => {
  process.exit();
});
