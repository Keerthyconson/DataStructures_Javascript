function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  //   console.log(mid);
  while (left <= right) {
    console.log(`left : ${left}`);
    console.log(`right : ${right}`);
    console.log(`mid : ${mid}`);
    if (array[mid] === value) {
      return mid;
    } else if (value < array[mid]) {
      right = mid - 1;
    } else if (value > array[mid]) {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
}

let array = [4, 5, 8, 13, 15, 20, 30, 36, 40];
// console.log(binarySearch(array, 5));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
