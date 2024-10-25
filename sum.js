const args = process.argv;
const sliced = args.slice(2);
const sumOfArr = function(arr) {
  let num = 0;
  for (let item of arr) {
    const strToNum = Number(item);
    num += strToNum;
  }
  return num;
};
console.log(sumOfArr(sliced));