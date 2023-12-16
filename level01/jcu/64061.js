// 크레인 인형뽑기 게임

function solution(board, moves) {
  let count = 0;
  const bucket = [];

  for (const col of moves) {
    for (const row of board) {
      const currentValue = row[col - 1];
      if (currentValue !== 0) {
        if (currentValue === bucket.at(-1)) {
          bucket.pop();
          count += 2;
        } else {
          bucket.push(currentValue);
        }
        row[col - 1] = 0;
        break;
      }
    }
  }

  return count;
}
