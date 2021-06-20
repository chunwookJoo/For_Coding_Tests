const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = 0;
let result = "";

const Result = (num) => {
  if (num === 1) {
    return (result += num);
  } else {
    result += num % 2;
    return Result(Math.floor(num / 2));
  }
};

rl.on("line", (userInput) => {
  num = userInput;
}).on("close", () => {
  const answer = Result(num);
  console.log(Array.from(answer).reverse().join(""));
  process.exit();
});
