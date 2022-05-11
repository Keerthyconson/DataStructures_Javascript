function pivot(arr, start = 0, end = arr.length + 1) {
  let pivotIndex = start;
  let pivotEle = arr[start];
  const swap = function (arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
  };
  for (let i = start + 1; i < arr.length; i++) {
    if (pivotEle > arr[i]) {
      pivotIndex += 1;
      arr = swap(arr, pivotIndex, i);
      console.log("arr : ", arr);
    }
  }
  arr = swap(arr, start, pivotIndex);
  console.log("arr : ", arr);
  return pivotIndex;
}

let array = [7, 6, 9, 5, 1, 4, 8, 3, 2];
let result = pivot(array);
console.log(result);
