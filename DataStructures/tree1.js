class Node {
  constructor(content, children = []) {
    this.content = content;
    this.children = children;
  }
}

const tree = new Node("hello", [
  new Node("world", [new Node("world1"), new Node("world2")]),
  new Node("and"),
  new Node("fun", [new Node("javascript")]),
]);

function traverse(node) {
  console.log(node.content);
  for (let child of node.children) {
    traverse(child);
  }
}

traverse(tree);
