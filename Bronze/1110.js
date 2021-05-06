const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  let count = 0;
  let num = input;
  let sum = 0;
  // while (1) {
  //   sum = Math.floor(num / 10) + (num % 10);
  //   num = (num % 10) * 10 + (sum % 10);
  //   count++;
  //   if (input === num) {
  //     break;
  //   }
  // }
  console.log(count);
}).on("close", function () {
  process.exit();
});
