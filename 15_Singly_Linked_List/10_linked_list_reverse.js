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

  //   Reverse a linked list
  reverse() {
    let node = this.head;
    console.log("node : ", node);
    this.head = this.tail;
    console.log("head : ", this.head);
    this.tail = node;
    console.log("tail : ", this.tail);
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    this.show();
    return this;
  }

  show() {
    let currentNode = this.head;
    let array = [];
    while (currentNode) {
      //   console.log("Data : ", currentNode.data);
      array.push(currentNode.data);
      //   console.log("Next : ", currentNode.next);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

console.log(list.reverse());
