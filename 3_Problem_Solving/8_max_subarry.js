// calculate the sum of n consecutive numbers & return the maximum sum
// SLIDING WINDOW
const maxSubArraySum = (array, n) => {
  if (array.length === 0) return 0;
  let left = 0;
  let right = left + n - 1;
  let maxSum = -Infinity;
  let ele = [];
  while (right <= array.length - 1) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += array[i];
      console.log(array[i]);
    }
    console.log("*******");
    if (sum > maxSum) {
      maxSum = sum;
      ele = array.slice(left, right + 1);
    }
    left = left + 1;
    right = right + 1;
  }
  console.log(ele);
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
