// 이상한 문자 만들기

function solution(s) {
  const words = s.split(' ');
  return words
    .map((word) =>
      [...word]
        .map((char, i) =>
          i % 2 ? char.toLowerCase() : char.toUpperCase()
        )
        .join('')
    )
    .join(' ');
}
