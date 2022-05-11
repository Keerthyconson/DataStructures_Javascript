// RE-DO

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

  //   dequeue() {
  //     const swap = function (arr, index1, index2) {
  //       let temp = arr[index1];
  //       arr[index1] = arr[index2];
  //       arr[index2] = temp;
  //       return arr;
  //     };
  //     if (this.values.length === 0) return "Empty Queue";

  //     let topPriority = this.values[0];

  //     if (this.values.length === 1) {
  //       this.values = [];
  //       return topPriority;
  //     }

  //     this.values[0] = this.values.pop();

  //     let index = 0;
  //     let lowest = this.values[0];

  //     let leftIndex = 2 * index + 1;
  //     let rightIndex = 2 * index + 2;
  //     let length = this.values.length - 1;

  //     let leftChild = this.values[leftIndex];
  //     let rightChild = this.values[rightIndex];

  //     if (rightIndex > length) {
  //       // has only one child
  //       if (leftChild.priority < lowest.priority) {
  //         let temp = this.values[leftIndex];
  //         this.values[leftIndex] = this.values[index];
  //         this.values[index] = temp;
  //       }
  //     }
  //     let maxChild;
  //     if (leftChild.priority < rightChild.priority) {
  //       maxChild = leftChild;
  //     } else maxChild = rightChild;

  //     console.log("maxChild : ", maxChild);

  //     console.log("lowest priority : ", lowest.priority);
  //     console.log("maxChild priority : ", maxChild.priority);

  //     while (lowest.priority > maxChild.priority) {
  //       this.values = swap(this.values, index, this.values.indexOf(maxChild));
  //       index = this.values.indexOf(lowest);

  //       leftIndex = 2 * index + 1;
  //       rightIndex = 2 * index + 2;

  //       console.log("leftIndex : ", leftIndex);
  //       console.log("rightIndex : ", rightIndex);
  //       console.log("length : ", this.values.length);

  //       if (rightIndex >= this.values.length) {
  //         // has only one child
  //         if (leftChild.priority < lowest.priority) {
  //           this.values = swap(this.values, index, leftIndex);
  //           console.log(this.values);
  //           return topPriority;
  //         }
  //       } else if (leftIndex >= this.values.length) {
  //         if (rightChild.priority < lowest.priority) {
  //           this.values = swap(this.values, index, rightIndex);
  //           console.log(this.values);
  //           return topPriority;
  //         }
  //       }

  //       leftChild = this.values[leftIndex];
  //       rightChild = this.values[rightIndex];

  //       console.log("leftChild : ", leftChild);
  //       console.log("rightChild : ", rightChild);

  //       if (leftChild.priority < rightChild.priority) {
  //         maxChild = leftChild;
  //       } else maxChild = rightChild;
  //     }
  //     console.log(this.values);
  //     return topPriority;
  //   }

  dequeue() {
    const swap = function (arr, index1, index2) {
      let temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
      return arr;
    };
    if (this.values.length === 0) return "Empty Heap";

    let maxValue = this.values[0];

    if (this.values.length === 1) {
      this.values = [];
      return maxValue;
    }
    this.values[0] = this.values.pop();

    // Sink Down
    let index = 0;
    let lowest = this.values[0];
    // 2n + 1
    let leftIndex = 2 * index + 1;
    let leftChild = this.values[leftIndex];
    // 2n + 2
    let rightIndex = 2 * index + 2;
    let rightChild = this.values[rightIndex];
    let maxChild;

    console.log(rightIndex);
    console.log(this.values);
    console.log(this.values.length);
    if (rightIndex >= this.values.length - 1) {
      // has only one child
      if (leftChild.priority > lowest.priority) {
        this.values = swap(this.values, index, leftIndex);
        console.log(this.values);
        return maxValue;
      }
      console.log(this.values);
      return maxValue;
    }
    if (rightChild.priority < leftChild.priority) {
      maxChild = rightChild;
    } else maxChild = leftChild;

    while (lowest > maxChild) {
      this.values = swap(this.values, index, this.values.indexOf(maxChild));
      // console.log(this.values);
      index = this.values.indexOf(lowest);

      leftIndex = 2 * index + 1;
      rightIndex = 2 * index + 2;

      if (rightIndex >= this.values.length - 1) {
        // has only one child
        if (leftChild.priority > lowest.priority) {
          this.values = swap(this.values, index, leftIndex);
          console.log(this.values);
          return maxValue;
        }
        console.log(this.values);
        return maxValue;
      }

      leftChild = this.values[leftChild];
      rightChild = this.values[rightIndex];

      if (rightChild.priority < leftChild.priority) {
        maxChild = rightChild;
      } else maxChild = leftChild;
    }

    console.log(this.values);
    return maxValue;
  }
}

const priorityQueue = new PriorityQueue();
let result = priorityQueue.enqueue("Hello", 18);
// console.log(result);

result = priorityQueue.enqueue("Hii", 39);
// console.log(result);

result = priorityQueue.enqueue("Marian", 12);
// console.log(result);

result = priorityQueue.enqueue("Terror", 0);
// console.log(result);

result = priorityQueue.enqueue("Horrible", 33);
// console.log(result);

result = priorityQueue.enqueue("Horrible", 41);
// console.log(result);

result = priorityQueue.dequeue();
console.log(result);
result = priorityQueue.dequeue();
console.log(result);
result = priorityQueue.dequeue();
console.log(result);
result = priorityQueue.dequeue();
console.log(result);
result = priorityQueue.dequeue();
console.log(result);
