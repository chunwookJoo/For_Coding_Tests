const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");
let answer = [];
const heardArr = new Set();
const seeArr = new Set();

for (let i = 0; i < input.length; i++) {
  if (i < N) heardArr.add(input[i]);
  else seeArr.add(input[i]);
}

heardArr.forEach((el) => {
  if (seeArr.has(el)) answer.push(el);
});

// answer = heardArr.filter((name) => seeArr.includes(name));
console.log(answer.length + "\n" + answer.sort().join("\n"));
