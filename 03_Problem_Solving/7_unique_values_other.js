const uniqueValues = (array) => {
  if (array.length === 0) return 0;
  let left = 0;
  let right = left + 1;
  while (right <= array.length - 1) {
    if (array[left] !== array[right]) {
      array[left + 1] = array[right];
      left += 1;
      right += 1;
    } else if (array[left] === array[right]) {
      right += 1;
    }
  }
  return left + 1;
};

let array = [
  1, 2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7,
];
// array = [1, 1, 1, 1, 1, 2];
// array = [1, 2, 2, 3, 3, 4, 4, 7, 7];
// array = [];
const result = uniqueValues(array);
console.log("Result  : ", result);
