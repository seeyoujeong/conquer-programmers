// 점포와 순간 이동

function solution(n) {
  let score = 0;
  let cur = n;
  while (cur > 0) {
    while (cur % 2 === 0) cur /= 2;
    cur -= 1;
    score += 1;
  }
  return score;
}
