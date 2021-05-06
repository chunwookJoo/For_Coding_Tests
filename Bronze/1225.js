const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const arr = input.split(" ");
  const num1 = arr[0].split("");
  const num2 = arr[1].split("");
  let result = 0;

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      result += Number(num1[i]) * Number(num2[j]);
    }
  }
  console.log(result);
});
