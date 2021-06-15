const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let count = 1;

const theaterSeat = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length == 2 && arr[i] == "L" && arr[i + 1] == "L") {
      count = 2;
      break;
    }
    if (arr.includes("L") == false) {
      count = arr.length;
    } else {
      if (arr[i] == "S") count += 1;
      else count += 0.5;
    }
  }
  console.log(count);
};

rl.on("line", (userInput) => {
  arr = userInput.split("");
}).on("close", () => {
  theaterSeat(arr);
  process.exit();
});
