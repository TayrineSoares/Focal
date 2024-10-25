const args = process.argv;
const sliced = args.slice(2);
function sumOfArr(arr) {
  let num = 0;
  for(let item of arr) {
    const strToNum = Number(item);
    if (strToNum > 0) 
      num += strToNum;
  }
return num;
}
console.log(sumOfArr(sliced));