// MULTIPLE POINTERS PATTERN
// Find the pair of numbers in a sorted array that sums to zero.

const sumZero = (array) => {
  for (let i = 0; i < array.length; i++) {
    let other = 0 - array[i];
    if (array[i] === 0) return "None";
    if (array.includes(other)) return [array[i], other];
  }
  return "None";
};

let array = [-3, -2, -1, 0, 1, 2, 3];
const result = sumZero(array);
console.log(result);
