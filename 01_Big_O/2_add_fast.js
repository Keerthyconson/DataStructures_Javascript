function add(n) {
  return (n * (n + 1)) / 2;
}
var time1 = performance.now();
add(10000000000);
var time2 = performance.now();
console.log(`Time elapsed : ${(time2 - time1) / 1000} seconds`);

// O/p: 00088
