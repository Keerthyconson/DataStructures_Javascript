class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Insert to the end
  push(data) {
    let node = new Node(data);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return this;
    }
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length += 1;
    return this;
  }
  // Delete from the end
  pop() {
    //   No Node
    if (this.length === 0) return undefined;

    // One Node
    if (this.head === this.tail) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return node;
    }

    // Else
    let oldTail = this.tail;
    let newTail = this.tail.previous;
    oldTail.previous = null;
    newTail.next = null;
    this.tail = newTail;
    this.length -= 1;
    return oldTail;
  }

  // Delete from the beginning
  shift() {
    if (this.length === 0) return undefined;

    if (this.head === this.tail) {
      let oldHead = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldHead;
    }

    let oldHead = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    oldHead.next = null;
    newHead.previous = null;
    this.length -= 1;
    return oldHead;
  }

  // Add a node to the beginning of the linked list
  unshift(data) {
    let node = new Node(data);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return this;
    }

    let oldHead = this.head;
    node.next = oldHead;
    oldHead.previous = node;
    this.head = node;
    this.length += 1;
    return this;
  }

  // Retrieve a node based on the index

  get(index) {
    if (this.length === 0 || index >= this.length) return undefined;

    if (index >= Math.floor(this.length / 2)) {
      // Start from tail
      let start = this.tail;
      let counter = this.length - index - 1;
      //   console.log("Counter : ", counter);
      while (counter > 0) {
        start = start.previous;
        counter -= 1;
      }
      return start;
    } else if (index < Math.floor(this.length / 2)) {
      // Start from head
      let start = this.head;
      let counter = 0;
      //   console.log("Counter : ", counter);
      while (counter < index) {
        start = start.next;
        counter += 1;
      }
      return start;
    }
  }

  show() {
    let array = [];
    let head = this.head;
    for (let i = 0; i < this.length; i++) {
      let temp = {};
      temp["data"] = head.data;
      temp["next"] = head.next ? head.next.data : null;
      temp["previous"] = head.previous ? head.previous.data : null;
      array.push(temp);
      head = head.next;
    }
    console.log(array);
  }
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

console.log(list);
list.show();
