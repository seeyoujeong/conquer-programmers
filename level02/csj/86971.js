// 전력망을 둘로 나누기

function solution(n, wires) {
  const travelWires = (wires) => {
    const wireMap = {};

    for (const [v1, v2] of wires) {
      if (!(v1 in wireMap)) wireMap[v1] = [];
      if (!(v2 in wireMap)) wireMap[v2] = [];
      wireMap[v1].push(v2);
      wireMap[v2].push(v1);
    }
    const stack = [1];
    const visited = new Set();

    while (stack.length) {
      const current = stack.pop();
      visited.add(current);

      if (!wireMap[current]) break;

      for (const next of wireMap[current]) {
        if (!visited.has(next)) stack.push(next);
      }
    }

    return visited;
  };

  const result = [];
  for (let i = 0; i < wires.length; i++) {
    const removed = wires.filter((x, idx) => idx !== i);

    const chunck = travelWires(removed);
    result.push(Math.abs(n - 2 * chunck.size));
  }
  return Math.min(...result);
}
