// 크레인 인형뽑기 게임

function solution(board, moves) {
  const basket = [];
  return moves.reduce((result, move) => {
    for (const row of board) {
      if (!row[move - 1]) continue;

      const doll = row[move - 1];
      row[move - 1] = 0;

      if (basket.at(-1) === doll) {
        basket.pop();
        return result + 2;
      } else {
        basket.push(doll);
        return result;
      }
    }
    return result;
  }, 0);
}
