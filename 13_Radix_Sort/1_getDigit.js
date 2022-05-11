// function getDigit(num, position) {
//   // pos = 0, 10 1, 10*10, 2, 10*10*10
//   let dec;
//   let count = 0;
//   while (count < position + 1) {
//     dec = num % 10;
//     num = Math.floor(num / 10);
//     count += 1;
//   }
//   return dec;
// }

function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

let num = 893;
console.log(getDigit(num, 0));
console.log(getDigit(num, 1));
console.log(getDigit(num, 2));
console.log(getDigit(num, 3));
console.log(getDigit(num, 4));
console.log(getDigit(num, 5));
