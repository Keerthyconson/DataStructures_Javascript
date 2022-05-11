class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    const swap = function (arr, index1, index2) {
      let temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
      return arr;
    };

    this.values.push(value);
    let currentIndex = this.values.length - 1;
    if (currentIndex === 0) return this.values;

    let parent = Math.floor((currentIndex - 1) / 2);
    // console.log("parent", this.values[parent]);
    // console.log("current index", this.values[currentIndex]);
    while (
      currentIndex >= 0 ||
      this.values[parent] > this.values[currentIndex]
    ) {
      parent = Math.floor((currentIndex - 1) / 2);
      if (this.values[parent] < this.values[currentIndex]) {
        this.values = swap(this.values, currentIndex, parent);
        currentIndex = parent;
        console.log(this.values);
      } else return this.values;
    }
    return this.values;
  }

  extractMax() {
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
    let maxChild = Math.max(leftChild, rightChild);

    if (rightIndex > this.values.length - 1) {
      // has only one child
      if (leftChild > lowest) {
        this.values = swap(this.values, index, leftIndex);
      }
    }

    while (lowest < maxChild) {
      this.values = swap(this.values, index, this.values.indexOf(maxChild));
      // console.log(this.values);
      index = this.values.indexOf(lowest);

      leftIndex = 2 * index + 1;
      rightIndex = 2 * index + 2;

      if (rightIndex > this.values.length) {
        // has only one child
        if (leftChild > lowest) {
          this.swap(this.values, index, leftIndex);
        }
      }
      leftChild = this.values[leftChild];
      rightChild = this.values[rightIndex];

      maxChild = Math.max(leftChild, rightChild);
    }

    console.log(this.values);
    return maxValue;
  }
}

const heap = new MaxBinaryHeap();
console.log(heap.values);

heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
console.log(heap.extractMax());
