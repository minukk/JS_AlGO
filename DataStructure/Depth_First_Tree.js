class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    
    while(true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      }
      else if (value > current.value) {
        current = current.right;
      }
      else {
        found = true;
      }
    }

    return found ? current : undefined;
  }

  contains(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found =false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      }
      else if (value > current.value) {
        current = current.right;
      }
      else {
        return true;
      }

      return false;
    }
  }

  DFSPreOrder() {
    const data = [];

    function travers(node) {
      data.push(node.value);
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
    }

    travers(this.root);
    
    return data;
  }

  DFSInOrder() {
    const data = [];

    function travers(node) {
      if (node.left) travers(node.left);
      data.push(node.value);
      if (node.right) travers(node.right);
    }

    travers(this.root);

    return data;
  }

  DFSPostOrder() {
    const data = [];

    function travers(node) {
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
      data.push(node.value);
    }

    travers(this.root);

    return data;
  }
}