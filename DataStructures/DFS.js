const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const dfs = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode); // 노드 탐색 시작
  // 탐색을 해야 할 노드가 남아있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop(); // dfs는 stack을 사용하기 때문에 pop 사용
    console.log(`node = ${node}`);
    // 해당노드가 탐색된 적이 없다면
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      console.log(`visitedQueue = ${node}`);
      needVisitStack = [...needVisitStack, ...graph[node]];
      console.log(`needVisitStack = ${needVisitStack}`);
    }
  }
  return visitedQueue;
};

console.log(dfs(graph, "A"));
