const isSubsequence = (subStr, mainStr) => {
  let mainPtr = 0;
  let subPtr = 0;
  //   let next = left + 1;
  while (mainPtr < mainStr.length) {
    if (mainStr[mainPtr] === subStr[subPtr]) {
      mainPtr += 1;
      subPtr += 1;
    } else if (mainStr[mainPtr] !== subStr[subPtr]) {
      mainPtr += 1;
    }
    if (subPtr === subStr.length) return true;
  }
  return false;
};

let substr = "sing";
let mainStr = "sting";
// true

// substr = "abc";
// mainStr = "abbccabchuhu";

// substr = "july";
// mainStr = "not July";

substr = "horror";
mainStr = "love";

const result = isSubsequence(substr, mainStr);
console.log(result);
