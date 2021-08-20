const oneCount = (binary) => {
  let count = binary.match(/1/g).length;
  return count;
};

function solution(n) {
  let curBinary, nextBinary;

  curBinary = oneCount(n.toString(2));

  while (true) {
    n += 1;
    nextBinary = oneCount(n.toString(2));
    if (curBinary === nextBinary) break;
  }

  return n;
}
