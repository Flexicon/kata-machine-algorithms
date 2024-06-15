class Node<T> {
    constructor(
        public value: T,
        public next: Node<T> | undefined = undefined,
    ) { }
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = new Node(item);

        if (!this.tail) {
            this.head = this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;

        const node = this.head;
        this.head = node.next;
        node.next = undefined;
        this.length--;

        if (!this.length) this.tail = undefined;

        return node?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

