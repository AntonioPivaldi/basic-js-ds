const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queueHead = null;
    this.queueTail = null;
  }

  getUnderlyingList() {
    return this.queueHead;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.queueHead || !this.queueTail) {
      this.queueHead = newNode;
      this.queueTail = newNode;
    } else {
      this.queueTail.next = newNode;
      this.queueTail = newNode;
    }

    return this.getUnderlyingList();
  }

  dequeue() {
    if (!this.queueHead) {
      return null;
    }

    const removedHead = this.queueHead;

    if (this.queueHead.next) {
      this.queueHead = this.queueHead.next;
    }

    return removedHead.value;
  }
}

module.exports = {
  Queue,
};
