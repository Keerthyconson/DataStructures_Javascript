function collectOddValues(arr) {
  let result = [];

  if (arr.length === 0) return result;
  if (arr[0] % 2 !== 0) result.push(arr[0]);

  result = result.concat(collectOddValues(arr.splice(1)));
  return result;
}

let arr = [90, 77, 5656, 55, 9, 78];
let result = collectOddValues(arr);
console.log(result);
