// 숫자 문자열과 영단어

function solution(s) {
  return Number(
    [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ].reduce((acc, cur, idx) => acc.replaceAll(cur, idx), s)
  );
}
