// Assume the arrays are sorted
function merge(array1, array2) {
  let result = [];
  //   Pointer of array1
  let i = 0;
  // Pointer for array2
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i += 1;
    } else if (array1[i] >= array2[j]) {
      result.push(array2[j]);
      j += 1;
    }
  }
  while (j < array2.length) {
    result.push(array2[j]);
    j += 1;
  }
  while (i < array1.length) {
    result.push(array1[i]);
    i += 1;
  }
  return result;
}

let array1 = [10, 15, 20];
let array2 = [12, 16, 18];
let result = merge(array1, array2);
console.log(result);

// array1 = [9, 13, 15, 17];
// array2 = [3, 20];
// result = merge(array1, array2);
// console.log(result);

// array1 = [18, 20, 35];
// array2 = [3, 5, 7, 25, 26, 30];
// result = merge(array1, array2);
// console.log(result);

// array1 = [];
// array2 = [3, 5, 7, 25, 26, 30];
// result = merge(array1, array2);
// console.log(result);
