class Node {
    public key: string | null;
    public value: string | null;
    public prev: Node | null;
    public next: Node | null;

    constructor() {
        this.key = null;
        this.value = null;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    private _head: Node;
    private _tail: Node;
    private _capacity: number = 4;
    private _map: Map<string, Node> = new Map();

    constructor() {
        this._head = new Node();
        this._head.prev = null;
        this._tail = new Node();
        this._tail.next = null;

        this._head.next = this._tail;
        this._tail.prev = this._head;
    }

    public get map(): Map<string, Node> {
        return this._map;
    }

    public getData(key: string): string {
        const currentNode = this._map.get(key);
        const currentNodeValue = currentNode!.value;
        //delete current node
        currentNode!.prev!.next = currentNode!.next;
        currentNode!.next!.prev = currentNode!.prev;
        //insert new node with current val at front
        const latestNode = this._addNodeToFront(key, currentNodeValue as string);
        this._map.set(key, latestNode);

        console.log('get', this._map);
        return currentNodeValue as string;
    }

    public putData(key: string, value: string) {
        if (this._map.size < this._capacity) {
            //add to the front
            const latestNode = this._addNodeToFront(key, value);
            this._map.set(key, latestNode);
        }
        else {
            //add to the front
            const latestNode = this._addNodeToFront(key, value);
            this._map.set(key, latestNode);
            //delete last node
            const lastNodeKey = this._tail.prev?.key;
            this._map.delete(lastNodeKey as string);
            this._tail.prev!.prev!.next = this._tail;
            this._tail.prev = this._tail.prev!.prev;
        }

        console.log('put', this._map);
    }

    private _addNodeToFront(key: string, value: string): Node {
        const latestNode = new Node();
        latestNode.key = key;
        latestNode.value = value;
        latestNode.next = this._head.next;
        this._head.next = latestNode;
        latestNode.prev = this._head;
        latestNode.next!.prev = latestNode;
    
        return latestNode;
    }
}

export const lruCache = new LRUCache();