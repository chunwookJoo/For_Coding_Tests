// 내가 짠 코드
function solution(nums) {
  // 가져갈 수 있는 폰켓몬 마리 수
  const getPhoneketmon = nums.length / 2;
  let answer = 0;

  // 배열의 중복을 제거
  let numArr = nums.filter((number, index) => nums.indexOf(number) === index);

  if (numArr.length >= getPhoneketmon) {
    return (answer = getPhoneketmon);
  }
  return (answer = numArr.length);
}

// 다른 사람 풀이
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
