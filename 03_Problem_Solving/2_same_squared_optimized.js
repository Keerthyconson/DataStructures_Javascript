const sameSquared = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  let counter1 = {};
  let counter2 = {};
  for (let ele of array1) {
    counter1[ele] = counter1[ele] ? counter1[ele] + 1 : 1;
  }
  for (let ele of array2) {
    counter2[ele] = counter2[ele] ? counter2[ele] + 1 : 1;
  }
  console.log(counter1);
  console.log(counter2);
  for (let ele in counter1) {
    if (counter1[ele] !== counter2[ele ** 2]) return false;
    if (!(ele ** 2) in counter2) return false;
  }
  return true;
};

let array1 = [1, 2, 2, 3, 4];
let array2 = [9, 1, 4, 4, 16];
let result = sameSquared(array1, array2);
console.log(result);
