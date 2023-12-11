// 이상한 문자 만들기

function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      [...word]
        .map((char, idx) =>
          idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
