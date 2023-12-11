// 크기가 작은 부분 문자열

function solution(t, p) {
  let count = 0;
  const pLength = p.length;

  for (let i = 0; i <= t.length - pLength; i += 1) {
    if (t.slice(i, i + pLength) <= p) {
      count += 1;
    }
  }

  return count;
}
