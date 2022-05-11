function power(base, exponent) {
  // base*base*base*.... exponent times
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

let base = 2;
let exponent = 2;
let result = power(base, exponent);
console.log(result);
// 4

base = 2;
exponent = 0;
result = power(base, exponent);
console.log(result);
// 1

base = 3;
exponent = 3;
result = power(base, exponent);
console.log(result);
// 27

base = 3;
exponent = 4;
result = power(base, exponent);
console.log(result);
// 81 = 3*3*3*3
