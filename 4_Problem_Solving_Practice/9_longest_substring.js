// length of longest distinct substring
function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let map = {};
  let longest = 0;
  let left = 0;
  let right = 0;
  // console.log(str);
  while (right < str.length) {
    let ele = str[right];
    if (!map[ele]) {
      // console.log(`map[ele] :  ${ele}`);
      map[ele] = 1;
      right += 1;
      // console.log(`right : ${right}`);
      if (right === str.length) {
        longest = Math.max(right - left, longest);
      }
    } else if (map[ele]) {
      // console.log(`right - left ${right - left}`);
      let diff = right - left;
      longest = Math.max(diff, longest);
      // console.log(`longest : ${longest}`);
      left += 1;
      right = left;

      map = {};
      // console.log(`left : ${left}`);
      // console.log(`right : ${right}`);
    }
  }
  return longest;
}

console.log(findLongestSubstring(""));
// o/p : 0

console.log(findLongestSubstring("rithmschool"));
// o/p: 7

console.log(findLongestSubstring("thisisawesome"));
// o/p : 6

console.log(findLongestSubstring("thecatinthehat"));
// o/p : 7

console.log(findLongestSubstring("bbbb"));
// o/p : 1

console.log(findLongestSubstring("longestsubstring"));
// o/p : 8

console.log(findLongestSubstring("thisishowwedoit"));
// o/p: 6
