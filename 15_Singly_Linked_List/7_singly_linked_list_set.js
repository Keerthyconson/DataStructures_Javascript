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
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
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
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(60);
list.push(50);
list.set(1, 25);

// console.log(list);
console.log(list);
