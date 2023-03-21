function solution(word) {
  const str = "";
  const result = [];

  for (let i = 1; i <= 5; i++) {
    dfs(str, i, result);
  }

  return result.sort().indexOf(word) + 1;
}

const dfs = (str, length, result) => {
  const wordArr = [..."AEIOU"];

  if (length === str.length) {
    result.push(str);
    return;
  }

  wordArr.forEach((word) => {
    dfs(word + str, length, result);
  });
};
