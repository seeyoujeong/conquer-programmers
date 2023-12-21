// 올바른 괄호

function solution(s) {
  let score = 0;
  for (const bracket of s) {
    if (bracket === '(') {
      score += 1;
    } else {
      score -= 1;
      if (score < 0) return false;
    }
  }
  return score === 0;
}
