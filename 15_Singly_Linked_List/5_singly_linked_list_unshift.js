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
  //    Adds an element to the beginniing of the list
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
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(60);
list.push(50);
list.unshift(11);
list.unshift(12);
list.unshift(13);
list.unshift(14);

console.log(list);
