class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let first = new Node("1_data");
first.next = new Node("2_data");
first.next.next = new Node("3_data");
