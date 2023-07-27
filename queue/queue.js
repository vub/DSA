export class Queue {
    queue = [];
    enqueue(item) {
        this.queue.push(item);
    };
    dequeue() {
        this.queue.shift();
    };
}
