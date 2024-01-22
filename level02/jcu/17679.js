// [1차] 프렌즈4블록

function solution(m, n, board) {
  let currentBoard = board.map((row) => [...row]);
  const nextBoard = board.map((row) => [...row]);

  while (true) {
    let count = 0;

    for (let i = 0; i < m - 1; i += 1) {
      for (let j = 0; j < n - 1; j += 1) {
        if (
          currentBoard[i][j] !== 0 &&
          currentBoard[i][j] === currentBoard[i + 1][j] &&
          currentBoard[i][j] === currentBoard[i][j + 1] &&
          currentBoard[i][j] === currentBoard[i + 1][j + 1]
        ) {
          nextBoard[i][j] = 0;
          nextBoard[i + 1][j] = 0;
          nextBoard[i][j + 1] = 0;
          nextBoard[i + 1][j + 1] = 0;
          count += 1;
        }
      }
    }

    if (count === 0)
      return nextBoard.flat().filter((block) => block === 0).length;

    for (let i = 1; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (nextBoard[i][j] === 0) {
          for (let k = i; 1 <= k; k -= 1) {
            nextBoard[k][j] = nextBoard[k - 1][j];
            nextBoard[k - 1][j] = 0;
          }
        }
      }
    }

    currentBoard = nextBoard.map((row) => [...row]);
  }
}
