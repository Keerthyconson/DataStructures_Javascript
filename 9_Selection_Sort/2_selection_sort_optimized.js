function selectionSort(array) {
  let minIndex;
  for (let i = 0; i < array.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] >= array[j]) minIndex = j;
    }
    if (i !== minIndex) array = swap(array, i, minIndex);
    console.log(array);
  }
  return array;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}
let array = [12, 7, 90, -10];
let result = selectionSort(array);
console.log(result);
