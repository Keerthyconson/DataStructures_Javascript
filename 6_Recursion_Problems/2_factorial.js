function factorial(n) {
  // n*n-1*n-2*...1
  if (n <= 1) return 1;
  if (n < 0) return 0;
  return n * factorial(n - 1);
}

let n = 2;
let result = factorial(n);
console.log(result);
// 2

n = 3;
result = factorial(n);
console.log(result);
// 6

n = 5;
result = factorial(n);
console.log(result);
// 5*4*3*2*1 =120
