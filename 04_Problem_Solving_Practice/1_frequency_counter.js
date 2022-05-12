// Given 2 numbers - these two numbers should have the same frequency of digits
const sameFrequency = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "Enter two valid numbers";
  let map1 = generateMap(num1);
  let map2 = generateMap(num2);
  console.log(map1);
  console.log(map2);
  if (Object.keys(map1).length !== Object.keys(map2).length) return false;
  for (let key in map1) {
    if (map1[key] === map2[key]) {
      delete map1[key];
      delete map2[key];
    }
    if (map1[key] !== map2[key]) return false;
  }
  if (Object.keys(map1).length !== 0 || Object.keys(map2).length !== 0)
    return false;
  return true;
};

function generateMap(num) {
  let map = {};
  for (let n of num.toString()) {
    if (map[n]) map[n] += 1;
    else map[n] = 1;
  }
  return map;
}

let number1 = 182;
let number2 = 812;
// true

number1 = 34;
number2 = 14;
// false

number1 = 3589578;
number2 = 5879385;
// true

number1 = 22;
number2 = 222;
// false

const result = sameFrequency(number1, number2);
console.log(result);
