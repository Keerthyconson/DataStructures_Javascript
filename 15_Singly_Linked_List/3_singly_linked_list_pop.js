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

  //   traverse() {
  //     let current = this.head;
  //     while (current.next.next) {
  //       current = current.next;
  //     }
  //     return current;
  //   }
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
    if (length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    return temp;
  }
}

const list = new SinglyLinkedList();
list.push(10);
// list.push(20);
// list.push(30);
// list.push(60);
// list.push(50);

// console.log(list);

// list.traverse();
console.log(list.pop());
// console.log(list.pop());

console.log(list);
