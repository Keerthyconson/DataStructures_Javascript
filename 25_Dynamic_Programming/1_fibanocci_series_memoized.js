function fibanocci(num, mem = {}) {
  if (mem[num]) return mem[num];
  if (num <= 2) return 1;
  let result = fibanocci(num - 2, mem) + fibanocci(num - 1, mem);
  mem[num] = result;
  return result;
}

let num = 45;
let result = fibanocci(num);
console.log(result);
