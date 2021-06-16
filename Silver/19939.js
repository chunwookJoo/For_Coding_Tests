const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const breakBak = (arr) => {
  const balls = arr[0];
  const baks = arr[1];

  let minimum = (baks * (Number(baks) + 1)) / 2;
  if (minimum > balls) {
    console.log("-1");
    return;
  }
  if ((balls - minimum) % baks == 0) {
    console.log(baks - 1);
    return;
  } else {
    console.log(baks);
    return;
  }
};

rl.on("line", (userInput) => {
  const arr = userInput.split(" ");
  breakBak(arr);
}).on("close", () => {
  process.exit();
});
