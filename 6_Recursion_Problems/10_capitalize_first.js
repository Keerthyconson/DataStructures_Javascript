function capitalizeFirst(str) {
  let resultArray = [];
  helper(str);
  function helper(str) {
    if (str.length === 0) return resultArray;
    str[0] = str[0][0].toUpperCase() + str[0].substr(1);
    resultArray.push(str[0]);
    helper(str.splice(1));
  }
  return resultArray;
}

let result = capitalizeFirst(["car", "taco", "banana"]);
// ['Car','Taco','Banana']
console.log(result);
