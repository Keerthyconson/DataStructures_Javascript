function isPalindrome(str) {
  function reverse(str) {
    if (str.length === 0) return "";
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
  }
  let reversed = reverse(str);
  return str === reversed;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
