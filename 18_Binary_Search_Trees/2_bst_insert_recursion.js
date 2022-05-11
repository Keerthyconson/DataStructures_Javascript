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

  //   Recursive Approach
  insert(data) {
    let node = new Node(data);

    //   If no root
    if (this.root === null) {
      this.root = node;
      return this;
    } else this.insertNode(this.root, node);
  }

  insertNode(root, node) {
    if (root === null) {
      root = node;
      return this;
    }
    if (node.data === root.data) return undefined;

    if (node.data > root.data) {
      if (root.right === null) {
        root.right = node;
      } else {
        // console.log("Calling insertNode with right :", root.right);
        this.insertNode(root.right, node);
      }
    }

    if (node.data < root.data) {
      if (root.left === null) {
        root.left = node;
      } else {
        // console.log("Calling insertNode with left:", root.left);
        this.insertNode(root.left, node);
      }
    }
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
console.log(bst.insert(18));

console.log(bst);
