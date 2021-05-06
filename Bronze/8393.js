const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  let n = Number(line);
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }
  console.log(result);
}).on("close", function () {
  process.exit();
});
