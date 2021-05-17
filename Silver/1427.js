const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrSort = (arr) => {
  arr.sort(function (a, b) {
    return b - a;
  });
  const answer = arr.join("");
  console.log(answer);
};

let arr = [];

rl.on("line", (userInput) => {
  arr = userInput.split("");
}).on("close", () => {
  arrSort(arr);
});
