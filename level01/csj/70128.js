// 내적

function solution(a, b) {
  return a.reduce((answer, num, i) => answer + num * b[i], 0);
}
