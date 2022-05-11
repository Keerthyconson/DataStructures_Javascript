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

  find(data) {
    //   Empty Tree
    if (this.root === null) return false;

    // Data in Root
    if (this.root.data === data) {
      console.log(this.root);
      return true;
    }

    // Else
    let current = this.root;
    while (true) {
      // Check right if data > current.data
      if (data > current.data) {
        if (current.right === null) {
          console.log("Data not found");
          return false;
        } else {
          current = current.right;
        }
      }
      //   Check left if data < current.data
      else if (data < current.data) {
        if (current.left === null) {
          console.log("Data not found");
          return false;
        } else {
          current = current.left;
        }
      }
      //   If we found data
      else if (data === current.data) {
        console.log("Data found in the tree!", current);
        return true;
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
