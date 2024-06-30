class Queue {
    constructor() {
        this.items = []
    }

    getSize() {
        return this.items.length;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    enqueue(value) {
        this.items.push(value);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }
    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.getSize());
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.getSize());
queue.print();
queue.dequeue();
queue.print();
console.log(queue.peek())
