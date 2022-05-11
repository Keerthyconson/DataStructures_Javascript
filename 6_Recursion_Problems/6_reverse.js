function reverse(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}

let str = "awesome";
let result = reverse(str);
console.log(result);

str = "hello dear";
result = reverse(str);
console.log(result);

str = "microwave";
result = reverse(str);
console.log(result);

str = "hearing loss";
result = reverse(str);
console.log(result);
