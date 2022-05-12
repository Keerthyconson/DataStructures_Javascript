const isValidAnagram = (string1, string2) => {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  if (string1.length !== string2.length) return false;
  //   Create a map
  let map1 = {};
  let map2 = {};
  for (let ele of string1) {
    map1[ele] = map1[ele] ? map1[ele] + 1 : 1;
  }
  console.log(map1);
  for (let ele of string2) {
    map2[ele] = map2[ele] ? map2[ele] + 1 : 1;
  }
  console.log(map2);
  for (let ele in map1) {
    if (!ele in map2) return false;
    if (map1[ele] === map2[ele]) {
      delete map1[ele];
      delete map2[ele];
    }
    console.log(map1);
    console.log(map2);
  }
  if (Object.keys(map1).length > 0 || Object.keys(map2).length > 0)
    return false;
  return true;
};

let string1 = "anagram";
let string2 = "margana";
const result = isValidAnagram(string1, string2);
console.log(result);
