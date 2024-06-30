class Stack {
    constructor() {
        this.items = [];
    }
    getSize() {
        return this.items.length;
    }
    isEmpty() {
        return this.getSize() === 0
    }
    push(value) {
        this.items.push(value);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items[this.getSize() -1];
    }
}

const stack = new Stack();
stack.push("Abhishek");
stack.push(200);
console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());