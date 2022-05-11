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
  // Retrieve a node based on the index
  get(index) {
    if (this.length === 0 || index >= this.length || index < 0)
      return undefined;

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
list.push(60);
list.push(70);

list.show();

let result = list.get(2);
console.log(result.data);
