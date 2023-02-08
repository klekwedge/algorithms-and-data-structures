class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;

    this.comparator = function (i, j) {
      if (i < j) {
        return -1;
      }
      if (i > j) {
        return 1;
      }
      return 0;
    };
  }

  prepend(value) {
    let newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  append(value) {
    let newNode = new LinkedListNode(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    // если удаляется голова списка,
    // нужно обозначить новую голову
    while (this.head && this.comparator(this.head.value, value) === 0) {
      this.head = this.head.next;
    }

    let current = this.head;

    if (current !== null) {
      while (current.next) {
        if (this.comparator(current.next.value, value) === 0) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }

    if (this.comparator(this.tail.value, value) === 0) {
      this.tail = current;
    }
  }
}

const list = new LinkedList();
list.append(5);
list.append(3);
list.append(2);
list.append(5);
list.append(7);
