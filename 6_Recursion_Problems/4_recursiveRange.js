function recursiveRange(range) {
  // 0+1+2+3..+range
  if (range === 0) return 0;
  return range + recursiveRange(range - 1);
}

let range = 6;
let result = recursiveRange(range);
console.log(result);
// 21

range = 10;
result = recursiveRange(range);
console.log(result);
// 55
