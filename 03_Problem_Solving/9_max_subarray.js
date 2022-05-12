// calculate the sum of n consecutive numbers & return the maximum sum
// SLIDING WINDOW

const maxSubArraySum = (array, n) => {
  if (array.length === 0) return 0;
  if (n > array.length) return "Not a valid subset";
  let left = 0;
  let right = left + n;
  let maxSum = 0;
  for (let i = left; i < right; i++) {
    maxSum += array[i];
  }
  let tempSum = maxSum;
  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

let array = [1, 2, 5, 2, 8, 1, 5];
let n = 2;
// Ans : 10

array = [1, 2, 5, 2, 8, 1, 5];
n = 4;
// Ans: 17

const result = maxSubArraySum(array, n);

console.log(result);
