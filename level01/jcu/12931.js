// 자릿수 더하기

function solution(n) {
  return [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);
}
