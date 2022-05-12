function areThereDuplicates(...args) {
  let map = {};
  for (let arg of args) {
    if (!map[arg]) map[arg] = 1;
    else if (map[arg]) return true;
  }
  return false;
}

// Variable arguments
// (1, 2, 3)(
//   // false

//   1,
//   2,
//   2
// )(
//   // true

//   "a",
//   "b",
//   "c",
//   "d",
//   "a"
// );
// false
const result = areThereDuplicates(1, 2, "a", "hu", "c", "a");
console.log(result);
