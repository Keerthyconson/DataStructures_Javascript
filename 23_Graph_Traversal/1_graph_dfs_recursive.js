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

  dfsRecursive(vertex) {
    let result = [];
    let visited = {};
    let list = this.adjacencyList;
    // console.log(this.adjacencyList);

    function helper(vertex) {
      if (!list[vertex]) return "Invalid Vertex";
      visited[vertex] = true;
      result.push(vertex);
      for (let node of list[vertex]) {
        if (!visited[node]) helper(node);
      }
    }

    helper(vertex);
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
g = graph.addEdge("A", "C");
g = graph.addEdge("B", "D");
g = graph.addEdge("C", "E");
g = graph.addEdge("D", "E");
g = graph.addEdge("D", "F");
g = graph.addEdge("E", "F");

console.log(g);

g = graph.dfsRecursive("A");
console.log(g);
