// 예산

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let wallet = budget;
  for (let count = 0; count < d.length; count++) {
    if (wallet - d[count] < 0) return count;
    wallet -= d[count];
  }
  return d.length;
}
