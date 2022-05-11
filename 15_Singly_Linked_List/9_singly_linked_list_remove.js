class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return this;
    }
    node.next = this.head;
    this.head = node;
    this.length += 1;
    return this;
  }
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    for (let i = 1; i < index + 1; i++) {
      current = current.next;
    }
    return current;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    // One node
    if (current.next === null) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    while (current.next.next) {
      current = current.next;
    }
    let temp = current.next;
    current.next = null;
    this.tail = current;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    return temp;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    return temp;
  }
  // Remove from the index
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    let position = this.get(index - 1);
    position.next = position.next.next;
    this.length -= 1;
    return true;
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(60);
list.push(50);

console.log(list.remove(4));

console.log(list);
