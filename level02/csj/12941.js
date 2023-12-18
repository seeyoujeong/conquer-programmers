// 최솟값 만들기

function solution(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);
  return A.reduce((answer, num, i) => answer + num * B[i], 0);
}
