function insertionSort(arr) {
  console.log("Array : ", arr);
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > currentValue; j--) {
      // Pushing backward
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}

let arr = [19, 2, 15, 7, 21, -2];
let result = insertionSort(arr);
console.log(result);
