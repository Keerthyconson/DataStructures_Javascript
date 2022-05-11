// finds the maximum sum of subarray with the length of the number passed to the function.
// consecutive numbers
// Sliding Window
function maxSubarraySum(array, n) {
  if (n > array.length) return null;
  let left = 0;
  let right = n - 1;
  let sum = -Infinity;
  //   console.log(array[left]);
  //   console.log(array[right]);
  while (right < array.length) {
    // console.log(`left : ${array[left]}`);
    // console.log(`right : ${array[right]}`);
    let temp = 0;
    for (i = left; i <= right; i++) {
      temp += array[i];
    }
    sum = Math.max(sum, temp);
    // console.log(`sum : ${sum}`);
    left += 1;
    right += 1;
  }
  return sum;
}

let array = [100, 200, 300, 400];
let n = 2;
console.log(maxSubarraySum(array, n));
// o/p: 700

array = [1, 4, 2, 10, 23, 3, 1, 0, 20];
n = 4;
console.log(maxSubarraySum(array, n));
// o/p: 39

array = [-3, 4, 0, -2, 6, -1];
n = 2;
console.log(maxSubarraySum(array, n));
// o/p : 5

array = [3, -2, 7, -4, 1, -1, 4, -2, 1];
n = 2;
console.log(maxSubarraySum(array, n));
// o/p : 5

array = [2, 3];
n = 3;
console.log(maxSubarraySum(array, n));
// o/p : null
