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
}

const heap = new MaxBinaryHeap();

result = heap.insert(55);
console.log(result);

result = heap.insert(16);
console.log(result);

result = heap.insert(80);
console.log(result);
