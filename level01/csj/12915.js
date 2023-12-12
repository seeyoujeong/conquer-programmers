// 문자열 내 마음대로 정렬하기

function solution(strings, n) {
  return strings.sort(
    (x, y) => x[n].localeCompare(y[n]) || x.localeCompare(y)
  );
}
