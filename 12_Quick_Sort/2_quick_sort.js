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
      //   console.log("arr : ", arr);
    }
  }
  arr = swap(arr, start, pivotIndex);
  //   console.log("arr : ", arr);
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //   Left
    quickSort(arr, left, pivotIndex - 1);
    //   Right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

let array = [7, 6, 9, 5, 1, 4, 8, 3, 2];
let result = quickSort(array);
console.log(result);
