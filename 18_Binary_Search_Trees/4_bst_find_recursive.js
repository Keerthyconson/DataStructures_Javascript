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

  find(data) {
    //   Empty Tree
    if (this.root === null) {
      console.log("Empty Tree");
      return false;
    }

    // Root element
    if (this.root.data === data) {
      console.log("Data found in the tree : ", this.root);
      return true;
    }

    // Else
    return this.findData(this.root, data);
  }

  findData(root, data) {
    if (root.data === data) {
      console.log("Data found in : ", root);
      return true;
    }
    if (data > root.data) {
      // Check right side
      if (root.right === null) {
        console.log("Data not found");
        return false;
      } else {
        return this.findData(root.right, data);
      }
    } else if (data < root.data) {
      // Check left side
      if (root.left === null) {
        console.log("Data not found");
        return false;
      } else {
        return this.findData(root.left, data);
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
console.log(bst.find(6));
console.log(bst.find(18));
console.log(bst.find(1));
