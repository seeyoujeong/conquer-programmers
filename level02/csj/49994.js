// 방문 길이

function solution(dirs) {
  let [curX, curY] = [0, 0];
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  const routes = new Set([]);
  const makeRoute = (x1, y1, x2, y2) => {
    if (x1 > x2 || y1 > y2) return `${x1},${y1}-${x2},${y2}`;
    return `${x2},${y2}-${x1},${y1}`;
  };

  for (const dir of dirs) {
    const [x, y] = move[dir];
    const [nextX, nextY] = [curX + x, curY + y];

    if (nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) continue;

    const route = makeRoute(curX, curY, nextX, nextY);
    routes.add(route);
    [curX, curY] = [nextX, nextY];
  }

  return routes.size;
}
