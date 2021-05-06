const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  const num = Number(input);
  let result = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
});
