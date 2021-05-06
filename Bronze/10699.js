let date = new Date();
const year = date.getFullYear();
const month = "0" + (1 + date.getMonth());
const day = date.getDate();
console.log(`${year}-${month}-${day}`);
