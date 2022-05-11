function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}
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

function radixSort(array) {
  let mostDigit = mostDigits(array);

  for (let i = 0; i < mostDigit; i++) {
    //let buckets = [];
    // for (let i = 0; i < 10; i++) {
    //   buckets.push([]);
    // }
    let buckets = Array.from({ length: 10 }, () => []);
    for (let ele of array) {
      let digit = getDigit(ele, i);
      buckets[digit].push(ele);
    }
    array = [].concat(...buckets);
    // for (let arr of buckets) {
    //   for (let ele of arr) {
    //     array.push(ele);
    //   }
    // }
  }
  //   console.log(buckets);
  return array;
}

console.log(radixSort([10, 300, 89, 56789, 542, 8988]));
