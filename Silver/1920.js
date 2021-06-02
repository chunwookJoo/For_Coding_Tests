const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (userInput) => {
  input.push(userInput);
  if (input.length === 4) {
    const [A, Anum, B, Bnum] = input;
    const arrA = new Set(Anum.split(" "));

    Bnum.split(" ").forEach((el) => {
      arrA.has(el) ? console.log(1) : console.log(0);
    });
    rl.close();
  }
}).on("close", () => {
  process.exit();
});
