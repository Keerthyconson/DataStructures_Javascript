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
    while (nodes.queue.length > 0) {
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

result = graph.dijikstra("A", "F");
console.log(result);
