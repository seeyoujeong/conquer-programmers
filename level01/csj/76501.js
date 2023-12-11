// 음양 더하기

function solution(absolutes, signs) {
  return absolutes.reduce(
    (answer, absolute, i) =>
      signs[i] ? answer + absolute : answer - absolute,
    0
  );
}
