function hash(key, arrayLen) {
  let total = 0;
  let PRIME = 31;

  // if the length of array greater than 100 it will only calculate the first 100
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let temp = key.charCodeAt(i) - 96;
    total = total * PRIME + temp;
  }

  return total % arrayLen;
}

let str = "pink";
let arrayLen = 11;
let result = hash(str, arrayLen);
console.log(`The string goes at index  ${result}`);
