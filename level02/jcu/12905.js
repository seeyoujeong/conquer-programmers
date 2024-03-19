// 가장 큰 정사각형 찾기

function solution(board) {
  if (board.every((row) => row.every((col) => col === 0))) return 0;

  let result = 1;

  for (let i = 1; i < board.length; i += 1) {
    for (let j = 1; j < board[0].length; j += 1) {
      if (board[i][j] === 0) continue;

      board[i][j] =
        Math.min(board[i - 1][j], board[i - 1][j - 1], board[i][j - 1]) + 1;
      result = Math.max(result, board[i][j]);
    }
  }

  return result ** 2;
}
