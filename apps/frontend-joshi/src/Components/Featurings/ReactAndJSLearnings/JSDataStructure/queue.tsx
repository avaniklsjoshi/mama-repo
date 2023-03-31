class Que {
  items: number[];
  constructor() {
    this.items = [];
  }
  enqueue(element: number) {
    return this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) return this.items[0];
    return null;
  }
  print() {
    console.log(this.items.toString());
  }
}
const que = new Que();
console.log("Is que Empty:", que.isEmpty());

que.enqueue(10);
que.enqueue(20);
que.enqueue(15);
console.log("que size:", que.size());
console.log("que top element:", que.peek());
console.log("que elements:", que.print());
que.dequeue();
console.log("que elements after pop:", que.print());

class QueOptimised {
  items: any;
  front: number;
  rear: number;
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(element: number) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const firstItem = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return firstItem;
  }
  size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  print() {
    console.log(this.items);
  }
}
const queOptimised = new QueOptimised();
console.log("Is queOptimised Empty:", queOptimised.isEmpty());

queOptimised.enqueue(10);
queOptimised.enqueue(20);
queOptimised.enqueue(15);
console.log("queOptimised size:", queOptimised.size());
console.log("queOptimised top element:", queOptimised.peek());
console.log("queOptimised elements:", queOptimised.print());
queOptimised.dequeue();
console.log("queOptimised elements after delete:", queOptimised.print());

export default function Queue() {
  return <div>Queue</div>;
}
