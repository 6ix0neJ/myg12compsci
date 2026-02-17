class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add element to the end of the list
    append(val) {
        const newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Add element to the beginning of the list
    prepend(val) {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
        this.size++;
    }

    // Insert at a specific index
    insertAt(index, val) {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }

        if (index === 0) {
            this.prepend(val);
            return;
        }

        const newNode = new ListNode(val);
        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    // Remove element at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        let current = this.head;

        if (index === 0) {
            this.head = current.next;
        } else {
            let previous = null;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
        }

        this.size--;
        return current.val;
    }

    // Get value at a specific index
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        return current.val;
    }

    // Print the list
    print() {
        if (!this.head) {
            console.log('List is empty');
            return;
        }

        let current = this.head;
        let result = [];

        while (current) {
            result.push(current.val);
            current = current.next;
        }

        console.log(result.join(' -> '));
    }

    // Clear the list
    clear() {
        this.head = null;
        this.size = 0;
    }

    // Reverse the list
    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.head = previous;
    }
}

// Demo usage
console.log('=== Linked List Demo ===\n');

const list = new LinkedList();

console.log('Adding elements: 10, 20, 30');
list.append(10);
list.append(20);
list.append(30);
list.print(); // 10 -> 20 -> 30

console.log('\nPrepending 5');
list.prepend(5);
list.print(); // 5 -> 10 -> 20 -> 30

console.log('\nInserting 15 at index 2');
list.insertAt(2, 15);
list.print(); // 5 -> 10 -> 15 -> 20 -> 30

console.log('\nGetting value at index 3:', list.get(3)); // 20

console.log('\nRemoving element at index 2');
list.removeAt(2);
list.print(); // 5 -> 10 -> 20 -> 30

console.log('\nReversing the list');
list.reverse();
list.print(); // 30 -> 20 -> 10 -> 5

console.log('\nList size:', list.size);
