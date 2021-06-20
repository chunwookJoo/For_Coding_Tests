class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((child) =>
      child.data === data ? false : true
    );
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const t = new Tree();
console.log(t);
t.root = new Node("a");
console.log(t);
t.root.add("b");
console.log(t);
t.root.add("c");
console.log(t);
t.root.children[0].add("d");
console.log(t.root);
t.root.remove("f");
console.log(t.root);
