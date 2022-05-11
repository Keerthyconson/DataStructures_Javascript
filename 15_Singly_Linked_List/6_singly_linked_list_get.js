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

  //   Retrieve a node by its position
  get(index) {
    if (index < 0 || index >= this.length) return "Invalid Index";
    let current = this.head;
    for (let i = 1; i < index + 1; i++) {
      current = current.next;
    }
    return current;
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(60);
list.push(50);

// console.log(list);
console.log(list.get(5));
