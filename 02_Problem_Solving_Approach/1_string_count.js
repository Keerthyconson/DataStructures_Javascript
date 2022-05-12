const countChar = (str) => {
  // Consider all chars to be lowercase
  if (typeof str === "undefined") {
    console.error("Enter a valid string");
    return;
  }
  if (typeof str === "string") str = str.toLowerCase();
  else str = str.toString();
  let map = {};
  for (let s of str) {
    map[s] ? (map[s] += 1) : (map[s] = 1);
  }
  console.log(map);
};

let str = "Hello Dear Sorry about that!";
str = "aaaa";
// str = 123;
// let str;
countChar(str);
