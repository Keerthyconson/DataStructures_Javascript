function stringSearch(longer, shorter) {
  let count = 0;
  for (let i = 0; i < longer.length; i++) {
    if (longer[i] === shorter[0]) {
      let substr = longer.substr(i, shorter.length);
      if (substr === shorter) count += 1;
    }
  }
  return count;
}

let longer = "hello my dear, hello, horrible hell, helloo hell oo";
let shorter = "h";
let result = stringSearch(longer, shorter);
console.log(result);
