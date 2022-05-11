// 2 parameters - array of +ve nums, an integer
// contigous subarray of minimal length
// where sum>= integer passed
function minSubArrayLen(array, num) {
  // Check if any individual ele > num
  for (let ele of array) {
    if (ele >= num) return 1;
  }
  let index = 1;
  while (index <= array.length) {
    let left = 0;
    let right = left + index;
    while (right < array.length) {
      let temp = 0;
      for (let i = left; i <= right; i++) {
        temp += array[i];
      }
      if (temp >= num) return index + 1;
      else {
        left += 1;
        right += 1;
      }
    }
    index += 1;
  }
  return 0;
}

let array = [2, 3, 1, 2, 4, 3];
num = 7;
console.log(minSubArrayLen(array, num));
// o/p : 2 [4, 3]

array = [2, 1, 6, 5, 4];
num = 9;
console.log(minSubArrayLen(array, num));
// o/p: 2, [5, 4]

array = [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19];
num = 52;
console.log(minSubArrayLen(array, num));
// o/p : 1, [62]

array = [1, 4, 16, 22, 5, 7, 8, 9, 10];
num = 39;
console.log(minSubArrayLen(array, num));
// o/p : 3

array = [1, 4, 16, 22, 5, 7, 8, 9, 10];
num = 55;
console.log(minSubArrayLen(array, num));
// o/p : 5

array = [4, 3, 3, 8, 1, 2, 3];
num = 11;
console.log(minSubArrayLen(array, num));
// o/p: 2

array = [1, 4, 16, 22, 5, 7, 8, 9, 10];
num = 95;
console.log(minSubArrayLen(array, num));
// o/p: 0
