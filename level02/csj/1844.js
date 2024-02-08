// 게임 맵 최단거리

function solution(maps) {
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = [[0, 0]];

  const canMove = (x, y) =>
    x >= 0 &&
    y >= 0 &&
    x < maps.length &&
    y < maps[0].length &&
    maps[x][y] === 1 &&
    !(x === 0 && y === 0);

  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (const [x, y] of moves) {
      const [nextX, nextY] = [curX + x, curY + y];

      if (canMove(nextX, nextY)) {
        queue.push([nextX, nextY]);
        maps[nextX][nextY] += maps[curX][curY];
      }
    }
  }

  const answer = maps[maps.length - 1][maps[0].length - 1];
  return answer === 1 ? -1 : answer;
}
