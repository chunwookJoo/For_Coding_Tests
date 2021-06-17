const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputArr = [];

function virus() {
  this.value = [];
  this.num = 0;
  this.contact = 0;

  this.solution = (inputArr) => {
    const num = Number(inputArr.shift());
    const contact = Number(inputArr.shift());
    const temp = Number(inputArr);
    console.log(num, contact);
    console.log(temp);
  };
}

rl.on("line", (userInput) => {
  inputArr.push(userInput);
}).on("close", () => {
  const fd = new virus();
  fd.solution(inputArr);
  process.exit();
});
