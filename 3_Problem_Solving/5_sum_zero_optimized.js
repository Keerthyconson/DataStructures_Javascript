// MULTIPLE POINTERS PATTERN
// Find the pair of numbers in a sorted array that sums to zero.
const sumZero = (array) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let diff = array[left] + array[right];
    if (diff === 0) return [array[left], array[right]];
    else if (diff > 0) right = right - 1;
    else if (diff < 0) left = left + 1;
  }
  return "None";
};

let array = [-4, -3, -2, -1, 0, 1, 2, 5];
const result = sumZero(array);
console.log(result);
