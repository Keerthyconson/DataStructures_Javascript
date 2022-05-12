function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.splice(1));
  }
  helper(arr);
  return result;
}

let arr = [90, 77, 5656, 55, 9, 78];
let result = collectOddValues(arr);
console.log(result);
