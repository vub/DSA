// Compare linked list and array in Javascript
// Compare linked list with iterator trong Javascript

export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        // We create a new Node
        const node = new Node(value);
        if (!this.head) {
            // If not head is define we define it alongside with the tail
            this.head = node;
            // We  define the tail
            this.tail = node;
            return this;
        }
        // If the head is defined we attach the new node to the
        // tail's next property
        this.tail.next = node;
        // We make the new node the tail
        this.tail = node;
        return this;
    }

    find(value) {
        if (!this.head || value === undefined) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    remove(value) {
        if (!this.head || value === undefined) {
            return null;
        }
        let nodeToRemove = null;
        // Check if the node to remove is the head node
        if (this.head.value === value) {
            // We save the node just to return it later
            nodeToRemove = this.head;
            // If the node is the head we remove the node by assigning
            // the second node as the head.
            this.head = this.head.next;
        } else {
            // currentNode will be used to iterate over the nodes
            let currentNode = this.head;
            // We iterate over the nodes until there are no more nodes left to search
            // or until we find the node to remove
            while (currentNode.next !== null) {
                if (currentNode.next.value === value) {
                    // We save the node just to return it later
                    nodeToRemove = currentNode.next;
                    // If we find the node we remove it as explained on point 4.
                    currentNode.next = currentNode.next.next;
                } else {
                    // If the node has not been found we continue searching
                    currentNode = currentNode.next;
                }
            }
        }
        return nodeToRemove;
    }
}
