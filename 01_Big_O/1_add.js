function add(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += i;
  return sum;
}

var time1 = performance.now();
add(10000000000);
var time2 = performance.now();
console.log(`Time elapsed : ${(time2 - time1) / 1000} seconds`);

// O/p = 11 sec
