function solution(numbers) {
  var answer = new Set();
  let nums = numbers.split("");

  // 소수 여부를 판별하는 함수
  const isPrimeNum = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const getPermutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newFixed = fixed + arr[i];
        const copyArr = arr.slice();
        copyArr.splice(i, 1);

        // 도출된 조합이 answer에 들어있지 않고, 소수일 경우 answer에 추가하도록 하였다.
        if (!answer.has(parseInt(newFixed)) && isPrimeNum(parseInt(newFixed))) {
          answer.add(parseInt(newFixed));
        }

        getPermutation(copyArr, newFixed);
      }
    }
  };

  getPermutation(nums, "");

  return answer.size;
}
