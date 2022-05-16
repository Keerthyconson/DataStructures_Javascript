function fibanocci(num) {
  if (num <= 2) return 1;
  let fib = [0, 1, 1];

  for (let i = 3; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[num];
}

let num = 45;
let result = fibanocci(num);
console.log(result);
