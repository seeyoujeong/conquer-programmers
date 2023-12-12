// 콜라 문제

function solution(a, b, n) {
  let cokes = n;
  let answer = 0;
  while (cokes >= a) {
    const newCokes = Math.floor(cokes / a) * b;
    cokes = newCokes + (cokes % a);
    answer += newCokes;
  }
  return answer;
}
