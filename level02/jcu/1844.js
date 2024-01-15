// 게임 맵 최단거리

function solution(maps) {
  const maxY = maps.length - 1;
  const maxX = maps[0].length - 1;
  const queue = [[0, 0, 1]];
  maps[0][0] = 0;

  while (queue.length > 0) {
    const [y, x, count] = queue.shift();

    if (y === maxY && x === maxX) return count;

    if (y - 1 >= 0 && maps[y - 1][x] === 1) {
      queue.push([y - 1, x, count + 1]);
      maps[y - 1][x] = 0;
    }

    if (y + 1 <= maxY && maps[y + 1][x] === 1) {
      queue.push([y + 1, x, count + 1]);
      maps[y + 1][x] = 0;
    }

    if (x - 1 >= 0 && maps[y][x - 1] === 1) {
      queue.push([y, x - 1, count + 1]);
      maps[y][x - 1] = 0;
    }

    if (x + 1 <= maxX && maps[y][x + 1] === 1) {
      queue.push([y, x + 1, count + 1]);
      maps[y][x + 1] = 0;
    }
  }

  return -1;
}
