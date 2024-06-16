class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.map = new Map();
    this.head = null;
    this.tail = null;
  }

  addLast(value) {
    const node = new LinkedListNode(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.map.set(value, node);
  }

  insertAfter(node, value) {
    const newNode = new LinkedListNode(value);
    if (node === this.tail) {
      this.tail = newNode;
    } else {
      newNode.next = node.next;
      if (node.next) {
        node.next.prev = newNode;
      }
    }
    node.next = newNode;
    newNode.prev = node;
    this.map.set(newNode.value, newNode);
  }

  remove(node) {
    if (node === this.head) {
      this.head = node.next;
      if (this.head) {
        this.head.prev = null;
      }
    }
    if (node === this.tail) {
      this.tail = node.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    const val = node.value;
    this.map.delete(val);
    return val;
  }

  find(value) {
    return this.map.get(value);
  }

  values() {
    let current = this.head;
    const output = [];
    while (current !== null) {
      output.push(current.value);
      current = current.next;
    }
    return [...output];
  }
}

