class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //   Add to the end
  enqueue(data) {
    let node = new Node(data);

    // Empty List
    if (this.size === 0) {
      this.first = node;
      this.last = node;
      this.size += 1;
      return this;
    }

    this.last.next = node;
    this.last = node;
    this.size += 1;
    return this;
  }

  //   Remove from the beginning
  dequeue() {
    //   Empty list
    if (this.size === 0) return undefined;

    // One node
    if (this.size === 1) {
      let node = this.first;
      this.first = null;
      this.last = null;
      this.size -= 1;
      return node;
    }

    let node = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return node;
  }

  show() {
    let array = [];
    let node = this.first;
    for (let i = 0; i < this.size; i++) {
      let temp = {};
      temp["data"] = node.data;
      temp["next"] = node.next ? node.next.data : null;
      array.push(temp);
      node = node.next;
    }

    console.log(array);
  }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

queue.show();

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.show();
