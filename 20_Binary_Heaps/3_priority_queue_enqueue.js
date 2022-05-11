class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);

    let currentIndex = this.values.length - 1;
    if (currentIndex === 0) return this.values;

    // console.log("PQ : ", this.values);
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 ||
      this.values[parentIndex].priority < this.values[currentIndex].priority
    ) {
      parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.values[parentIndex].priority > this.values[currentIndex].priority
      ) {
        // console.log("currentIndex : ", this.values[currentIndex]);
        // console.log("parentIndex : ", this.values[parentIndex]);
        let temp = this.values[currentIndex];
        this.values[currentIndex] = this.values[parentIndex];
        this.values[parentIndex] = temp;
        currentIndex = parentIndex;
      } else return this.values;
    }
    return this.values;
  }
}

const priorityQueue = new PriorityQueue();
let result = priorityQueue.enqueue("Hello", 18);
console.log(result);

result = priorityQueue.enqueue("Hii", 39);
console.log(result);

result = priorityQueue.enqueue("Marian", 12);
console.log(result);

result = priorityQueue.enqueue("Terror", 0);
console.log(result);
