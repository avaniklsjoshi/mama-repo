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

export default function Queue() {
  return <div>Queue</div>;
}
