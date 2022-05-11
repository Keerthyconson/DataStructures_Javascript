function capitalizeWords(array) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  function helper(array) {
    if (array.length === 0) return result;
    result.push(array[0].toUpperCase());
    helper(array.slice(1));
  }
  helper(array);
  return result;
}

let words = ["i", "am", "learning", "recursion"];
let result = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(result);
