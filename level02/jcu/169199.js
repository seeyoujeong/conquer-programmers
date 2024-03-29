// 리코쳇 로봇

function solution(board) {
  const move = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const maxY = board.length;
  const maxX = board[0].length;
  let visited = [...Array(maxY)].map((_) => [...Array(maxX)].fill(false));
  const checkMove = (y, x) => {
    return y < 0 || x < 0 || y >= maxY || x >= maxX || board[y][x] === "D";
  };
  let start;
  let end;

  for (let i = 0; i < board.length; i += 1) {
    const indexOfStart = board[i].indexOf("R");
    const indexOfEnd = board[i].indexOf("G");

    if (indexOfStart !== -1) {
      start = [i, indexOfStart];
      visited[i][indexOfStart] = true;
    }

    if (indexOfEnd !== -1) {
      end = [i, indexOfEnd];

      if (move.every(([y, x]) => !checkMove(i + y, indexOfEnd + x))) {
        return -1;
      }
    }
  }

  let queue = [[...start, 0]];

  while (queue.length > 0) {
    const [curY, curX, count] = queue.shift();

    if (board[curY][curX] === "G") {
      return count;
    }

    for (const [y, x] of move) {
      let [nextY, nextX] = [curY + y, curX + x];

      if (checkMove(nextY, nextX)) continue;

      while (!checkMove(nextY + y, nextX + x)) {
        [nextY, nextX] = [nextY + y, nextX + x];
      }

      if (!visited[nextY][nextX]) {
        queue.push([nextY, nextX, count + 1]);
        visited[nextY][nextX] = true;
      }
    }
  }

  return -1;
}
