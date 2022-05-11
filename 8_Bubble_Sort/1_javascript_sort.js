function sortNumbers(array) {
  return array.sort((a, b) => {
    return a - b;
  });
}

let array = [10, 6, 4, 78, 9999, 34];
let result = sortNumbers(array);
console.log(result);
