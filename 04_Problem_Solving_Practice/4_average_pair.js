//input = Sorted Array, target average
// fun = pair of values with the average = target_average
// Note: can have more than one pair

const averagePair = (array, target_average) => {
  if (array.length === 0) return false;
  let start = 0;
  let next = array.length - 1;
  console.log(array[next]);
  while (start < next) {
    let average = (array[start] + array[next]) / 2;
    console.log(`Average of ${array[start]} and ${array[next]} is ${average}`);
    if (average === target_average) return true;
    if (average < target_average) start += 1;
    else next -= 1;
  }
  return false;
};

// let array = [1, 2, 3];
// let target_average = 2.5;
// true

array = [1, 3, 3, 5, 6, 7, 10, 12, 19];
target_average = 8;
// true

// array = [-1, 0, 3, 4, 5, 6];
// target_average = 4.1;
// // false

// array = [];
// target_average = 4;
// // false

const result = averagePair(array, target_average);
console.log(result);
