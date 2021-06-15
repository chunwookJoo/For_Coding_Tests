const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let zero = 0;
let one = 0;

const resultFunction = (arr) => {
  if (arr[0] == "0") zero++;
  else one++;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      if (arr[i] == "0") zero++;
      else one++;
    }
  }
  console.log(Math.min(zero, one));
};

rl.on("line", (userInput) => {
  const arr = userInput.split("");
  resultFunction(arr);
}).on("close", () => {
  process.exit();
});
