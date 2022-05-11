class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySerachTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new Node(data);

    //   If no root
    if (this.root === null) {
      this.root = node;
      return this;
    }

    // If there are nodes in the tree
    let current = this.root;
    while (true) {
      if (node.data === current.data) return undefined;
      if (node.data > current.data) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      } else if (node.data < current.data) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      }
    }
  }

  postorder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node);
    }

    traverse(this.root);
    return visited;
  }
}

let bst = new BinarySerachTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(11);
bst.insert(18);

console.log(bst.postorder());
