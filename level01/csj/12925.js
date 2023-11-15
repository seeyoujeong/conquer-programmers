// 문자열을 정수로 바꾸기

function solution(s) {
  if (s[0] === '-') {
    return -1 * Number(s.slice(1));
  }
  return Number(s);
}
