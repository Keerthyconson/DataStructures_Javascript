function sortByLength(str) {
  return str.sort((a, b) => {
    return a.length - b.length;
  });
}

let str = ["Hello", "rose", "green", "ape", "malaria", "he", "I"];
let result = sortByLength(str);
console.log(result);
