export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  //insert last node
  insertLast(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
  //insert at index
  insertAtIndex(data, index) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    }
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    let curr = this.head;
    let count = 1;
    while (count < index && curr.next) {
      count++;
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
  }
  //get at index
  getAtIndex(index) {
    let curr = this.head;
    let count = 0;
    while (curr && count <= index) {
      if (count === index) console.log("index value", curr.data);
      count++;
      curr = curr.next;
    }
  }
  //remove at index
  removeAtIndex(index) {
    let curr = this.head;
    let count = 0;
    let prev;
    if (index === 0) {
      this.head = curr.next;
      return;
    }
    while (count < index && curr.next) {
      prev = curr;
      curr = curr.next;
      count++;
    }
    prev.next = curr.next;
  }
  //reverse linked list
  reverse() {
    let current = this.head;
    let next = null,
      prev = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  //reverse using recursion
  reverseRecur(node, next, prev) {
    if (node == null) {
      node = prev;
      return null;
    }
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
    this.reverseRecur(node, next, prev);
  }
  exchangeNode() {
    if (this.head.next.next === this.head) {
      this.head = this.head.next;
      return this.head;
    }

    //1->2->3->4->5->null
    let p = this.head;
    while (p.next.next === this.head) {
      p = p.next;
    }

    p.next.next = this.head.next; //p = 4->5->2->3->4->5->head
    this.head.next = p.next; // 1->5->2->3->4->5->head
    p.next = this.head; // 4->1->5->2->3->4->5->head
    this.head = the.head.next; //1->5->2->3->4->5->head

    //can also do it in tail with temp
    const tail = this.head;
    while (!tail.next) {
      tail = tail.next;
    }

    //exchange with temp
    let temp = tail.data;
    tail.data = this.head.data;
    this.head.data = temp;
  }

  //print data
  printData() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}
