// 전력망을 둘로 나누기

function solution(n, wires) {
  let results = Array(wires.length).fill(1);
  let visited = Array(wires.length).fill(false);
  const dfs = (idx, v1) => {
    for (let i = 0; i < wires.length; i += 1) {
      const v1Index = wires[i].indexOf(v1);

      if (!visited[i] && v1Index !== -1) {
        results[idx] += 1;
        visited[i] = true;
        dfs(idx, wires[i][v1Index === 0 ? 1 : 0]);
        visited[i] = false;
      }
    }
  };

  for (let i = 0; i < wires.length; i += 1) {
    visited[i] = true;
    dfs(i, wires[i][0]);
    visited[i] = false;
  }

  return Math.min(...results.map((num) => Math.abs(n - num * 2)));
}
