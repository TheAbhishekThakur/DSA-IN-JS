class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.haed = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // Adding an element at the beginning o(1)
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    // Adding an element at the end o(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node
        }
        this.size++;
    }

    // Insert a node at a given index
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        } else if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    // Remove a node from a given index in the list
    removeByIndex(index) {
        let removeNode;
        if (index < 0 || index >= this.size) {
            return null;
        } else if (index === 0) {
            removeNode = this.node;
            this.head = this.head.next;
            this.size--;
            return removeNode.value
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }

    }

    removeByValue(value) {
        let removeNode;
        if (this.isEmpty()) {
            console.log("List is Empty.");
            return null;
        } else if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value
            }
            return null;
        }
    }

    serch(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print() {
        if (this.isEmpty()) {
            console.log("The list is empty.")
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log('empty', list.isEmpty())
console.log('size', list.getSize())
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();
list.append(40)
list.append(50)
list.append(60)
list.insert(70, 2);
list.removeByIndex(3);
list.removeByValue(70);
console.log(list.serch(20));
list.reverse();
list.print();
