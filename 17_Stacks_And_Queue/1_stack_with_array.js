// Approach 1 : O(1) - doesnot require re-indexing

let stack = [];

stack.push("Google");
stack.push("Instagram");
stack.push("Facebook");
stack.push("YouTube");
stack.push("Twitter");

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

// Another approach O(N)
stack = [];
stack.unshift("Google");
stack.unshift("Facebook");
stack.unshift("YouTube");
stack.unshift("Twitter");
stack.unshift("Amazon");

stack.shift();
stack.shift();
stack.shift();
stack.shift();
