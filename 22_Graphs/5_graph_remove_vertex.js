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

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return "Invalid Vertex";

    let index = this.adjacencyList[vertex1].indexOf(vertex2);
    if (index > -1) this.adjacencyList[vertex1].splice(index, 1);

    index = this.adjacencyList[vertex2].indexOf(vertex1);
    if (index > -1) this.adjacencyList[vertex2].splice(index, 1);

    return this.adjacencyList;
  }

  removeVertex(vertex1) {
    const node = this.adjacencyList[vertex1];
    if (!node) return "Invalid Vertex";

    for (let v of node) {
      let temp = this.adjacencyList[v];
      let index = temp.indexOf(vertex1);
      this.adjacencyList[v].splice(index, 1);
    }
    delete this.adjacencyList[vertex1];
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

vertex = "KaulaLampur";
g = graph.addVertex(vertex);

vertex = "Paris";
g = graph.addVertex(vertex);

vertex = "London";
g = graph.addVertex(vertex);

vertex = "Cairo";
g = graph.addVertex(vertex);

vertex = "NewYork";
g = graph.addVertex(vertex);

vertex = "Dallas";
g = graph.addVertex(vertex);

g = graph.addEdge("Tokyo", "Delhi");
g = graph.addEdge("Tokyo", "Colombo");
g = graph.addEdge("Delhi", "Colombo");
g = graph.addEdge("Delhi", "KaulaLampur");
g = graph.addEdge("London", "Paris");
g = graph.addEdge("Cairo", "Paris");
g = graph.addEdge("London", "Cairo");
g = graph.addEdge("London", "Tokyo");
g = graph.addEdge("Tokyo", "Paris");
g = graph.addEdge("Delhi", "London");
g = graph.addEdge("London", "Colombo");
g = graph.addEdge("KaulaLampur", "Paris");
g = graph.addEdge("Colombo", "KaulaLampur");
g = graph.addEdge("NewYork", "Cairo");
g = graph.addEdge("NewYork", "Paris");
g = graph.addEdge("NewYork", "KaulaLampur");
g = graph.addEdge("Dallas", "Delhi");
g = graph.addEdge("Paris", "Dallas");
g = graph.addEdge("Tokyo", "Dallas");
g = graph.addEdge("NewYork", "Cairo");

console.log(g);
console.log("************");

g = graph.removeVertex("Paris");
console.log(g);
