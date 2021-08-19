// 최대공약수
const gcd = (a, b) => {
  return b ? gcd(b, a % b) : a;
};

// 최대공배수
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}
