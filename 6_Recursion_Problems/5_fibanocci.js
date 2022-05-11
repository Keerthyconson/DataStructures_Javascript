function fib(n) {
  // 1,1,2,3,5,8..
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

let n = 4;
let result = fib(n);
console.log(result);
// 3

n = 10;
result = fib(n);
console.log(result);
// 55

n = 28;
result = fib(n);
console.log(result);
// 317811
