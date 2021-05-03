const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let input = line.split(" ");

  let result = BigInt(input[0]) * BigInt(input[1]);
  console.log(BigInt(result));

  rl.close();
}).on("close", function () {
  process.exit();
});
