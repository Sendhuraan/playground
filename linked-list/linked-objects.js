const Node = {
  init: function(data, next = null) {
      this.data = data;
      this.next = next;
  }
}

// Objects Linked
const LinkedList = {
  init: function(data) {
      this.head = null;
      this.tail = null;
  },
  add: function(data) {
      const newNode = Object.create(Node);
      newNode.init(data)

      if(!this.head) {
          this.head = newNode;
          this.tail = newNode;

          return this;
      }

      this.tail.next = newNode;
      this.tail = newNode;
  }
}

const list = Object.create(LinkedList);
list.add(5);
list.add(6);
list.add(7);
list.add(8);

console.log(list);