class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    else return "Vertex already exist";
    return this.adjacencyList;
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return "Invalid vertex";

    //   Avoid duplicates
    for (let node of this.adjacencyList[vertex1]) {
      if (node === vertex2) return this.adjacencyList;
    }

    for (let node of this.adjacencyList[vertex2]) {
      if (node === vertex1) return this.adjacencyList;
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);

    return this.adjacencyList;
  }

  bfsIterative(vertex) {
    let queue = [];
    let result = [];
    let visited = {};

    queue.push(vertex);
    console.log("Queue : ", queue);
    while (queue.length > 0) {
      let node = queue.shift();
      console.log("node : ", node);
      if (!visited[node]) {
        visited[node] = true;
        console.log("Visited : ", visited);
        result.push(node);
        console.log("result : ", result);
        for (let ver of this.adjacencyList[node]) {
          if (!visited[ver]) queue.push(ver);
        }
        console.log("Queue : ", queue);
      }
      console.log("***************");
    }

    return result;
  }
}

let graph = new Graph();

let vertex = "A";
let g = graph.addVertex(vertex);

vertex = "B";
g = graph.addVertex(vertex);

vertex = "C";
g = graph.addVertex(vertex);

vertex = "D";
g = graph.addVertex(vertex);

vertex = "E";
g = graph.addVertex(vertex);

vertex = "F";
g = graph.addVertex(vertex);

g = graph.addEdge("A", "B");
g = graph.addEdge("A", "E");
g = graph.addEdge("B", "D");
g = graph.addEdge("C", "E");
g = graph.addEdge("D", "E");
g = graph.addEdge("D", "F");
g = graph.addEdge("E", "F");

console.log(g);

g = graph.bfsIterative("A");
console.log(g);
