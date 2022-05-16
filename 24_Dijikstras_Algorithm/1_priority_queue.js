class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    let node = { value, priority };
    this.queue.push(node);
    this.sort();
  }

  dequeue() {
    return this.queue.shift();
  }
  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}
