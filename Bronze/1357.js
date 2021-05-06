require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    main(line);
  })
  .on("close", () => process.exit());

const reverseString = (el) => {
  let newString = "";
  for (let i = el.length - 1; i >= 0; i--) {
    newString += el[i];
  }
  return newString;
};

const main = (line) => {
  const numbers = line.split(" ").map(reverseString).map(Number);
  const sum = numbers.reduce((acc, cur) => (acc += cur));
  const result = reverseString(String(sum));
  console.log(Number(result));
};
