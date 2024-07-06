class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    isEmpty() {
        return this.rear - this.front === 0;
    }
    peek() {
        return this.items[this.front];
    }
    size() {
        return this.rear - this.front;
    }
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.size());
queue.enqueue(10);
queue.print();
queue.dequeue();
queue.peek();