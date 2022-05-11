function merge(array1, array2) {
  let result = [];
  let i = 0;
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

function mergeSort(arr) {
  // Split Array
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

let arr = [3, 5, 7, 25, 26, 30];
let result = mergeSort(arr);
console.log(result);
