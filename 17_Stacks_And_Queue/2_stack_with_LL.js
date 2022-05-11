class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.next = null;
    this.size = 0;
  }
  //   Add to the front of the stack
  push(ele) {
    let node = new Node(ele);
    if (this.size === 0) {
      this.first = node;
      this.next = null;
      this.size += 1;
      return this;
    }
    node.next = this.first;
    this.first = node;
    this.size += 1;
    console.log(this);
    return this;
  }

  //   Remove from the front
  pop() {
    if (this.length === 0) return null;
    if (this.size === 1) {
      let temp = this.first;
      this.first = null;
      this.next = null;
      this.size -= 1;
      return temp;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return temp;
  }

  show() {
    let array = [];
    let node = this.first;
    for (let i = 0; i < this.size; i++) {
      let temp = {};
      temp["data"] = node.data;
      temp["next"] = node.next ? node.next.data : null;
      array.push(temp);
      node = node.next;
    }
    console.log(array);
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);

stack.show();

console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

stack.show();
