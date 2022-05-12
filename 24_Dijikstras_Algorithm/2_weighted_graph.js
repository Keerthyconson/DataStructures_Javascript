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
}

let graph = new WeightedGraph();
let result = graph.addVertex("A");
result = graph.addVertex("B");
result = graph.addVertex("C");
result = graph.addVertex("D");
result = graph.addVertex("E");
result = graph.addVertex("F");

console.log(result);

result = graph.addEdge("A", "B", 10);
result = graph.addEdge("B", "C", 9);
result = graph.addEdge("E", "F", 11);
result = graph.addEdge("F", "A", 10);
result = graph.addEdge("B", "D", 10);

console.log(result);
