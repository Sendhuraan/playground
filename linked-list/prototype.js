function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

function LinkedList(data) {
    const newNode = new Node(data);
    
    this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.add = function(data) {
    const newNode = new Node(data);

    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;

        return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
}

const list = new LinkedList(5);
list.add(6);
list.add(7);
list.add(8);