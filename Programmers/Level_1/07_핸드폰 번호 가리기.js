function solution(phone_number) {
  let answer = "";
  let frontNum = phone_number.slice(0, -4).length;

  return (answer = "*".repeat(frontNum).concat("", phone_number.substr(-4)));
}
