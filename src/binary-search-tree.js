const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);
    if (!this.rootNode) {
      this.rootNode = node;
    } else {
      this.addNode(this.rootNode, node);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    }
    if (newNode.data > node.data) {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.find(data)?.data ? true : false;
  }

  find(data, node = this.rootNode) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      return node;
    } else if (data > node.data) {
      return this.find(data, node.right);
    } else {
      return this.find(data, node.left);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(data);
  }

  removeNode(data, node = this.rootNode) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      const min = this.minNode(node.right);
      node.data = min.data;
      node.right = this.removeNode(min.data, node.right);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(data, node.right);
      return node;
    } else {
      node.left = this.removeNode(data, node.left);
      return node;
    }
  }

  min() {
    return this.minNode(this.rootNode).data;
  }

  minNode(node) {
    if (!node.left) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }

  max() {
    return this.maxNode(this.rootNode).data;
  }

  maxNode(node) {
    if (!node.right) {
      return node;
    } else {
      return this.maxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
