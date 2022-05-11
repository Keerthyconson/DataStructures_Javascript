function sumRange(range) {
  if (range <= 0) return 0;
  return range + sumRange(range - 1);
}

const result = sumRange(5);
console.log(result);
