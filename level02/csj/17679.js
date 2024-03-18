// [1차] 프렌트4블록

function solution(m, n, board) {
  const boardMap = board.map((str) => [...str]);

  const leftUp = [
    [0, -1],
    [-1, -1],
    [-1, 0],
  ];
  const leftDown = [
    [0, -1],
    [1, -1],
    [1, 0],
  ];
  const rightUp = [
    [0, 1],
    [-1, 1],
    [-1, 0],
  ];
  const rightDown = [
    [0, 1],
    [1, 1],
    [1, 0],
  ];

  const isRemoved = (i, j) => {
    return [leftUp, leftDown, rightUp, rightDown].some((dir) => {
      return dir.every(([x, y]) => {
        const [nextX, nextY] = [i + x, j + y];
        if (nextX < 0 || nextY < 0 || nextX >= m || nextY >= n) return false;
        return boardMap[i][j] === boardMap[nextX][nextY];
      });
    });
  };

  const removed = [];
  let result = 0;

  while (true) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (removed.includes([i, j]) || boardMap[i][j] === 'X') continue;
        if (isRemoved(i, j)) removed.push([i, j]);
      }
    }
    if (removed.length === 0) return result;
    while (removed.length > 0) {
      result += 1;
      const [i, j] = removed.pop();
      boardMap[i][j] = 'X';
    }
    for (let j = 0; j < n; j++) {
      const blocks = [];
      for (let i = 0; i < m; i++) {
        if (boardMap[i][j] === 'X') continue;
        blocks.push(boardMap[i][j]);
      }
      for (let i = m - 1; i >= 0; i--) {
        boardMap[i][j] = blocks.length ? blocks.pop() : 'X';
      }
    }
  }
}
