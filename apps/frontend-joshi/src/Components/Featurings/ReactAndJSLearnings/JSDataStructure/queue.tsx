class Que {
  items: number[];
  constructor() {
    this.items = [];
  }
  push(element: number) {
    return this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  print() {
    console.log(this.items.toString());
  }
}
const stack = new Que();
console.log("Is stack Empty:", stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(15);
console.log("stack size:", stack.size());
console.log("stack top element:", stack.peek());
console.log("stack elements:", stack.print());
stack.pop();
console.log("stack elements after pop:", stack.print());

export default function Queue() {
  return <div>Queue</div>;
}
