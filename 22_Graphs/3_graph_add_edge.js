class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    else return "Vertex already exist";
    return this.adjacencyList;
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return "No such vertex";

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
}

let graph = new Graph();

let vertex = "Tokyo";
let g = graph.addVertex(vertex);

vertex = "Delhi";
g = graph.addVertex(vertex);

vertex = "Colombo";
g = graph.addVertex(vertex);

vertex = "Kaula Lampur";
g = graph.addVertex(vertex);

g = graph.addEdge("Tokyo", "Delhi");
console.log(g);

g = graph.addEdge("Tokyo", "Colombo");
console.log(g);

g = graph.addEdge("Delhi", "Colombo");
console.log(g);

g = graph.addEdge("Delhi", "Kaula Lampur");
console.log(g);
