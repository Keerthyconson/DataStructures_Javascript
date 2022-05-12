const sameSquared = (array, squaredArray) => {
  if (squaredArray.length !== array.length) return false;
  let sq = [];
  for (let ele of array) {
    sq.push(ele * ele);
  }
  for (let ele of sq) {
    if (squaredArray.includes(ele)) {
      let index = squaredArray.indexOf(ele);
      squaredArray.splice(index, 1);
    } else return false;
  }
  if (squaredArray.length > 0) return false;
  else return true;
};

let array = [1, 2, 3, 4];
let squaredArray = [9, 1, 1, 16];
let result = sameSquared(array, squaredArray);
console.log(result);
