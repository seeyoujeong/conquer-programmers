// 문자열 다루기 기본

function solution(s) {
  return (
    (s.length === 4 || s.length === 6) &&
    !(s.includes("e") || s.includes("x") || s.includes("o")) &&
    !Number.isNaN(Number(s))
  );
}
