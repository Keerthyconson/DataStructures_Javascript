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
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(60);
list.push(50);

console.log(list.insert(5, 25));
console.log(list.insert(3, 89));
console.log(list.insert(9, 89));
console.log(list);
