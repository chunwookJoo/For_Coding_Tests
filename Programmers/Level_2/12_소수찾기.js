const arr = ["1", "7"];
let result = [];

const getPer = (arr, fixed) => {
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      const newFixed = fixed + arr[i];
      const copyArr = arr.slice();
      copyArr.splice(i, 1);

      result.push(newFixed);

      getPer(copyArr, newFixed);
    }
  }
};

getPer(arr, "");
console.log(result);
