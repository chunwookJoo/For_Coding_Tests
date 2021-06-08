const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const money = 1000;
const changeList = [500, 100, 50, 10, 5, 1];

const moneyChanger = (pay, money, changeList) => {
  let count = 0;
  let changeMoney = money - pay;
  for (i of changeList) {
    if (changeMoney === 0) {
      break;
    }
    count += parseInt(changeMoney / i);
    changeMoney %= i;
  }
  console.log(count);
};

rl.on("line", (userInput) => {
  const pay = userInput;

  moneyChanger(pay, money, changeList);

  rl.close();
}).on("close", () => {
  process.exit();
});
