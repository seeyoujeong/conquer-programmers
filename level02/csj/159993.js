// 미로 탈출

function solution(maps) {
  const moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const [n, m] = [maps.length, maps[0].length];

  let start = [];
  let lever = [];
  let end = [];

  const board = maps.map((line, i) => {
    const isStart = line.indexOf('S');
    const isLever = line.indexOf('L');
    const isEnd = line.indexOf('E');

    if (isStart >= 0) start = [i, isStart];
    if (isLever >= 0) lever = [i, isLever];
    if (isEnd >= 0) end = [i, isEnd];

    return [...line].map((char) => (char === 'X' ? 0 : 1));
  });

  const travel = (start, end, board) => {
    const queue = [start];
    while (queue.length > 0) {
      const [curX, curY] = queue.shift();

      if (curX === end[0] && curY === end[1]) {
        return board[curX][curY] - 1;
      }

      for (const [x, y] of moves) {
        const [nextX, nextY] = [curX + x, curY + y];

        if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue;
        if (board[nextX][nextY] !== 1) continue;

        board[nextX][nextY] += board[curX][curY];
        queue.push([nextX, nextY]);
      }
    }
    return -1;
  };

  const toLever = travel(
    start,
    lever,
    board.map((line) => [...line])
  );
  const toEnd = travel(
    lever,
    end,
    board.map((line) => [...line])
  );

  if (toLever < 0 || toEnd < 0) return -1;
  return toLever + toEnd;
}
