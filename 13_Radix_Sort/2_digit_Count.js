// function digitCount(num) {
//   let count = 0;
//   if (num === 0) return 1;
//   while (num > 0) {
//     num = Math.floor(num / 10);
//     count += 1;
//   }
//   return count;
// }

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(1234));
console.log(digitCount(12367674));
console.log(digitCount(34));
console.log(digitCount(0));
console.log(digitCount(1));
console.log(digitCount(123565676554232434));
console.log(digitCount(124));
