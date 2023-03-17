// https://youtu.be/QdCyTTid9-U

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

class LindkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail?.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  insertAfter(value, prevNode) {
    if (prevNode === null) {
      return this;
    }

    const newNode = new LinkedListNode(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }

    return this;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString() {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }
}

const list = new LindkedList();

list.append("a");
list.append("b");
list.append("c");

console.log(list.toArray());

// [
//     LinkedListNode {
//       value: 'a',
//       next: LinkedListNode { value: 'b', next: [LinkedListNode] }
//     },
//     LinkedListNode {
//       value: 'b',
//       next: LinkedListNode { value: 'c', next: null }
//     },
//     LinkedListNode { value: 'c', next: null }
// ]

console.log(list.toString()); // a,b,c

list.prepend("f");
console.log(list.toString()); // f,a,b,c

list.append("a").append("b").append("c").append("a").append("a");
console.log(list.toString()); // f,a,b,c,a,b,c,a,a

list.delete("a");
console.log(list.toString()); // f,b,c,b,c

let prev = list.find("f");
list.insertAfter("e", prev);
console.log(list.toString()); // f,e,b,c,b,c
list.insertAfter("e", prev);
console.log(list.toString()); // f,e,e,b,c,b,c
