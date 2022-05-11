function hash(str, arrayLen) {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    let temp = str.charCodeAt(i) - 96;
    console.log(temp);
    total += temp;
  }

  //   suppose the array has a capacity of arrayLen
  return total % arrayLen;
}

let str = "pink";
let arrayLen = 11;
let result = hash(str, arrayLen);
console.log(`The string goes at index  ${result}`);
