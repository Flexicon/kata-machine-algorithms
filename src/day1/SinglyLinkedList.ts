class Node<T> {
    constructor(public value: T, public next: Node<T> | undefined = undefined) {
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        this.head = new Node(item, this.head);
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (!this.head || idx === 0) {
            return this.prepend(item);
        }

        let prevNode = this.head;
        while (prevNode.next && idx > 1) {
            prevNode = prevNode.next;
            idx--;
        }

        prevNode.next = new Node(item, prevNode.next);
        this.length++;
    }

    append(item: T): void {
        if (!this.head) {
            return this.prepend(item);
        }

        let node = this.head;
        while (node.next) {
            node = node.next;
        }

        node.next = new Node(item);
        this.length++;
    }

    remove(item: T): T | undefined {
        if (!this.head) return undefined;
        if (this.head.value === item) return this.removeAt(0);
        if (!this.head.next) return undefined;

        let prevNode = this.head;
        let node = this.head.next;
        while (node && node.value !== item && node.next) {
            prevNode = node;
            node = node.next;
        }
        if (node.value !== item) return undefined;

        prevNode.next = node.next;
        node.next = undefined;
        this.length--;

        return node.value;
    }

    get(idx: number): T | undefined {
        if (!this.head) return undefined;

        let node = this.head;
        while (node.next && idx > 0) {
            node = node.next;
            idx--;
        }
        if (idx !== 0) return undefined;

        return node.value;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head) return undefined;
        if (idx === 0) {
            const node = this.head;
            this.head = node.next;
            node.next = undefined;
            this.length--;

            return node.value;
        }

        let prevNode = this.head;
        while (prevNode.next && idx > 1) {
            prevNode = prevNode.next;
            idx--;
        }
        if (idx !== 1) return undefined;

        const node = prevNode.next;
        prevNode.next = node?.next;
        if (node) node.next = undefined;
        this.length--;

        return node?.value;
    }
}
