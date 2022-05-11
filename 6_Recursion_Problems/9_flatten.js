// function flatten(array) {
//   if (array.length === 0) return;
//   if (!Array.isArray(array[0])) {
//     result.push(array[0]);
//     array = array.slice(1);
//   }
//   return flatten(array.slice(1));
// }

function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else if (!Array.isArray(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// [1, [2, [3,4], [[5]]]]

console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
