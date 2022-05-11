class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    else return "Vertex already exist";
    return this.adjacencyList;
  }
}

let graph = new Graph();

let vertex = "Japan";
let g = graph.addVertex(vertex);
console.log(g);

vertex = "India";
g = graph.addVertex(vertex);
console.log(g);

vertex = "Myanmar";
g = graph.addVertex(vertex);
console.log(g);

vertex = "Malaysia";
g = graph.addVertex(vertex);
console.log(g);

vertex = "Malaysia";
g = graph.addVertex(vertex);
console.log(g);
