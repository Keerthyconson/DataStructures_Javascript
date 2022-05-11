function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(array) {
  let charCount = 0;
  //   let highestNum;
  for (let ele of array) {
    charCount = Math.max(digitCount(ele), charCount);
    //   highestNum = ele;
  }
  return charCount;
}

console.log(mostDigits([10, 1000, 7, 90, 987665433, 78, 0]));
console.log(mostDigits([100000000000, 1000, 7, 90, 987665433, 78, 0]));
console.log(mostDigits([10, 1000, 7, 90, 9, 78, 0]));
console.log(mostDigits([10, 1, 7, 900, 9, 78, 0]));
