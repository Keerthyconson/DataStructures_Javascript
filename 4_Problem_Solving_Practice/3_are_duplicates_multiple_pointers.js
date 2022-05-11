// This works only for integers
function areThereDuplicates(...args) {
  args = args.sort((a, b) => a - b);
  console.log(args);
  let start = 0;
  let next = start + 1;
  while (next < args.length) {
    if (args[start] === args[next]) return true;
    start += 1;
    next += 1;
  }
  return false;
}

const result = areThereDuplicates(1, 2, "a", "hu", "c", "a");
console.log(result);
