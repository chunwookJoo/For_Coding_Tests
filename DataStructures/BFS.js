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

const bfs = (graph, startNode) => {
  let visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색을 해야 할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  // 탐색을 해야 할 노드가 남아있다면
  while (needVisit.length !== 0) {
    const node = needVisit.shift(); // bfs는 queue를 사용하고 queue는 선입선출이기 때문에 shift 사용

    // 해당노드가 탐색된 적이 없다면
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

console.log(bfs(graph, "A"));
