// 내가 짠 코드
// function solution(num) {
//     let answer = 0;

//     while(num) {
//         if(num==1) {return answer;}
//         if(num % 2 == 0) {
//             num /= 2;
//             answer++;
//         } else if(answer > 483) {
//             return answer = -1;
//         }
//         else {
//             num = num * 3 + 1;
//             answer++;
//         }
//     }
//     return answer;
// }

// 아름다운 코드
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
