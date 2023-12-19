// JadenCase 문자열 만들기

function solution(s) {
  return s
    .split(" ")
    .map((str) =>
      str === "" ? str : str[0].toUpperCase() + str.slice(1).toLowerCase()
    )
    .join(" ");
}
