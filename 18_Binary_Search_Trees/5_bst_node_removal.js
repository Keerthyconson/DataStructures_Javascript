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
      return this.root;
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
        return current;
      }
    }
  }

  delete(data) {
    //   3 conditions :
    // 1. Leaf node - just delete it
    // 2. Only one child - Copy the contents to the node & delete the child
    // 3. Two children - Find inorder successor.
    // Copy the contents of the inorder successor.
    // Delete the inorder successor.
    if (this.root === null) return undefined;

    let current = this.root;
    let parent = null;
    while (true) {
      if (data > current.data) {
        parent = current;
        if (current.right === null) {
          console.log("Data not found");
          return false;
        } else current = current.right;
      }
      if (data < current.data) {
        parent = current;
        if (current.left === null) {
          console.log("Data not found");
          return false;
        } else current = current.left;
      }
      if (data === current.data) {
        //   Found the data
        // 1. Check if the node is a leaf node
        if (current.left === null && current.right === null) {
          if (current.data > parent.data) {
            parent.right = null;
            return this;
          } else if (current.data < parent.data) {
            parent.left = null;
            return this;
          }
        }
        // 2. Only one child - Copy the contents to the node & delete the child
        else if (current.left === null && current.right !== null) {
          //    Only right child.
          current = current.right;
          // Parent -right if current >parent
          // Parent -left if current < parent
          if (current.data > parent.data) {
            parent.right = current;
          } else if (current.data < parent.data) {
            parent.left = current;
          }
        }
        // 2. Only one child - Copy the contents to the node & delete the child
        else if (current.left === null && current.left !== null) {
          //    Only right child.
          current = current.left;
          // Parent -right if current >parent
          // Parent -left if current < parent
          if (current.data > parent.data) {
            parent.right = current;
          } else if (current.data < parent.data) {
            parent.left = current;
          }
        }
        // 3. Two children - Find inorder successor.
        // Copy the contents of the inorder successor.
        // Delete the inorder successor.
        else if (current.left && current.right) {
          // 1. Find inorder sucessor
          let visited = this.inorder();
          let index = visited.indexOf(current);
          //   2.Inorder Successor
          let inorderSuccessor = visited[index + 1];
          console.log("Inorder Successor : ", inorderSuccessor);

          inorderSuccessor.left = current.left;
          if (current.data > parent.data) {
            parent.right = inorderSuccessor;
            return this;
          } else if (current.data < parent.data) {
            parent.left = inorderSuccessor;
            return this;
          }
          return "bla bla";
        }
      }
    }
  }

  inorder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node);
      if (node.right) traverse(node.right);
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

bst.delete(15);
bst.delete(18);
