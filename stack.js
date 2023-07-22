export class Stack {
    stack = [];

    push(item) {
        this.stack.push(item);
    }
    pop() {
        this.stack.pop();
    }
}
