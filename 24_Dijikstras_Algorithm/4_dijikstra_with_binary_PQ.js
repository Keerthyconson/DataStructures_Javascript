class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    else return "Vertex already added";
    return this.adjacencyList;
  }

  addEdge(vertex1, vertex2, weight) {
    let temp = { node: vertex2, weight };
    this.adjacencyList[vertex1].push(temp);
    temp = { node: vertex1, weight };
    this.adjacencyList[vertex2].push(temp);

    return this.adjacencyList;
  }

  dijikstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // Building inital states
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }
    console.log("Distances : ", distances);
    console.log("Nodes : ", nodes);
    console.log("Previous : ", previous);

    // As long as every node is visited
    while (nodes.values.length > 0) {
      smallest = nodes.dequeue().value;
      console.log("Smallest : ", smallest);
      if (smallest === finish) {
        //   Done & Build path
        console.log("Distances : ", distances);
        console.log("Previous : ", previous);

        // Starting to build path
        path.push(finish);
        while (previous[finish]) {
          path.push(previous[finish]);
          finish = previous[finish];
        }

        return path.reverse();
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          console.log("Neighbor : ", neighbor);

          //   Calculate new distance to neighbor
          let candidate = distances[smallest] + neighbor.weight;
          console.log("Candidate : ", candidate);

          //   Compare if this is smaller than the current value
          let nextNeighbor = neighbor.node;
          if (candidate < distances[nextNeighbor]) {
            //   updating distance
            distances[nextNeighbor] = candidate;
            // updating previous - how we got there
            previous[nextNeighbor] = smallest;
            // enqueue priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
  }
}

let graph = new WeightedGraph();
let result = graph.addVertex("A");
result = graph.addVertex("B");
result = graph.addVertex("C");
result = graph.addVertex("D");
result = graph.addVertex("E");
result = graph.addVertex("F");

console.log(result);

result = graph.addEdge("A", "B", 4);
result = graph.addEdge("A", "C", 2);
result = graph.addEdge("B", "E", 3);
result = graph.addEdge("C", "D", 2);
result = graph.addEdge("C", "F", 4);
result = graph.addEdge("D", "F", 1);
result = graph.addEdge("D", "E", 3);
result = graph.addEdge("F", "E", 1);
console.log(result);

result = graph.dijikstra("A", "E");
console.log(result);
