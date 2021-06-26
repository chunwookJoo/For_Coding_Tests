const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let answer = "";

const resultNum = (input) => {
  const cardCount = input.shift();
  const numCount = input.shift();

  if (cardCount == 0) {
  }
};

rl.on("line", (userInput) => {
  input.push(userInput);
}).on("close", () => {
  resultNum(input);
  process.exit();
});
