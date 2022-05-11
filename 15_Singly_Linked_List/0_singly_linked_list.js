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
  // Add to tail
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

  // Remove from tail
  pop() {
    if (!this.head) return undefined;
    // One element
    if (current.next === null) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    let temp = current.next;
    current.next = null;
    this.tail = current;
    this.length -= 1;
    // Deleted the last element
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    return temp;
  }
  // Remove from the head
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
  //  Add to head
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

  //   Retrieve a node by its position
  get(index) {
    if (index < 0 || index >= this.length) return "Invalid Index";
    let current = this.head;
    for (let i = 1; i < index + 1; i++) {
      current = current.next;
    }
    return current;
  }

  //   Set the value to the index
  set(index, value) {
    let current = this.get(index);
    if (!current) return false;
    else current.data = value;
    return true;
  }

  //   Insert a node into a specified position
  insert(index, value) {
    if (index === this.length) return !!this.push(value);
    else if (index === 0) return !!this.unshift(value);
    else if (index < 0 || index > this.length) return false;
    else {
      let position = this.get(index - 1);
      let node = new Node(value);
      if (!position) return false;
      node.next = position.next;
      position.next = node;
      this.length += 1;
      return true;
    }
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

  //   Reverse a linked list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
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
