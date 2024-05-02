// 네트워크

function solution(n, computers) {
  let count = 0;
  let visited = Array(n).fill(false);

  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      let stack = [i];

      while (stack.length > 0) {
        const current = stack.pop();
        visited[current] = true;

        for (let j = 0; j < n; j += 1) {
          if (!visited[j] && computers[current][j]) {
            stack.push(j);
          }
        }
      }

      count += 1;
    }
  }

  return count;
}
