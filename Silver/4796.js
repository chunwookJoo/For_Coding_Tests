const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let V = 0;
let P = 0;
let L = 0;
let count = 0;

const camping = (list) => {
  for (let i = 0; i < list.length; i++) {
    count = 0;
    L = list[i][0];
    P = list[i][1];
    V = list[i][2];

    while (V > P) {
      V -= P;
      count += L;
    }
    if (L > V) count += V;
    else count += L;
    console.log(`Case ${i + 1}: ${count}`);
  }
};

let input = [];
let list = [];

rl.on("line", (userInput) => {
  input.push(userInput);
}).on("close", () => {
  for (i of input) {
    list.push(i.split(" ").map((el) => parseInt(el)));
  }
  list.pop();
  camping(list);
  process.exit();
});
