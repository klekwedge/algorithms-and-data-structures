class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // start
    this.head = null;

    // end
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

  deleteHead() {
    if (!this.head) {
      return null;
    }
    let deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  deleteTail() {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    // найти предпоследний элемент списка
    // и сделать его новым хвостом
    let current = this.head;
    while (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }

    this.tail = current;

    return deletedTail;
  }

  forEach(callback) {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }

  reverseForEach(callback) {
    function tick(node) {
      if (node) {
        tick(node.next);
        callback(node.value);
      }
    }

    tick(this.head);
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let current = this.head;

    while (current) {
      if (this.comparator(current.value, value) === 0) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

class HashTable {
  constructor() {
    this.buckets = Array(hashTableSize).fill(null);
  }

  hash(key) {
    let hash = Array.from(key).reduce((sum, key) => {
      return sum + key.charCodeAt(0);
    }, 0);
    return hash % hashTableSize;
  }

  set(key, value) {
    // вычисляем хеш для ключа
    let index = this.hash(key);

    // если для данного хеша еще нет списка, создаем
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }

    let list = this.buckets[index];
    // проверяем, не добавлен ли ключ ранее
    let node = list.find((nodeValue) => {
      nodeValue.key === key;
    });

    if (node) {
      node.value.value = value; // обновляем значение для ключа
    } else {
      list.append({ key, value }); // добавляем новый элемент в конец списка
    }
  }

  get(key) {
    // вычисляем хеш для ключа
    let index = this.hash(key);
    // находим в массиве соответствующий список
    let list = this.buckets[index];

    if (!list) return undefined;

    // ищем в списке элемент с нужным ключом
    let node = list.find((nodeValue) => {
      return nodeValue.key === key;
    });

    if (node) return node.value.value;
    return undefined;
  }

  delete(key) {
    let index = this.hash(key);
    let list = this.buckets[index];

    if (!list) return;

    let node = list.find((nodeValue) => nodeValue.key === key);
    if (!node) return;

    list.delete(node.value);
  }
}
