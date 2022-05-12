function bubbleSort(arr) {
  let swapFlag;
  for (let i = arr.length; i > 0; i--) {
    swapFlag = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr, j, j + 1);
        swapFlag = true;
      }
    }
    if (!swapFlag) return arr;
  }
  return arr;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}
let array = [9, 78, 23, 48, -3, 56, 78, 99];
let result = bubbleSort(array);
console.log(result);
