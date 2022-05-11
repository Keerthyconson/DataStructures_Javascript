const isSubsequence = (subStr, mainStr) => {
  subStr = subStr.toLowerCase();
  mainStr = mainStr.toLowerCase();
  let pattern = new RegExp(subStr);
  const temp = mainStr.match(pattern);
  return temp ? true : false;
};

let substr = "hello";
let mainStr = "heLlo world";

substr = "abc";
mainStr = "abbccabchuhu";

substr = "july";
mainStr = "not July";

// substr = "horror";
// mainStr = "love";

const result = isSubsequence(substr, mainStr);
console.log(result);
