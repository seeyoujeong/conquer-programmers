// 예상 대진표

function solution(n, a, b) {
  let answer = 1;
  while (Math.ceil(a / 2 ** answer) !== Math.ceil(b / 2 ** answer)) {
    answer += 1;
  }
  return answer;
}
