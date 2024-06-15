class Node<T> {
    constructor(
        public value: T,
        public prev: Node<T> | undefined = undefined,
    ) { }
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        this.head = new Node(item, this.head);
        this.length++;
    }

    pop(): T | undefined {
        if (!this.head) return undefined;

        const node = this.head;
        this.head = node.prev;
        this.length--;

        return node?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

