// 크기가 작은 부분 문자열

function solution(t, p) {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    if (Number(t.slice(i, i + p.length)) <= Number(p)) answer += 1;
  }
  return answer;
}
