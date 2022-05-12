function productOfArray(array) {
  if (array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}

let array = [1, 2, 3];
let result = productOfArray(array);
console.log(result);
// 6

array = [2, 2, 2];
result = productOfArray(array);
console.log(result);
// 8

array = [2, 2, 3, 5];
result = productOfArray(array);
console.log(result);
// 60
