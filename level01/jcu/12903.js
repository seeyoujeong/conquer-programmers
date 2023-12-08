// 가운데 글자 가져오기

function solution(s) {
  const sLength = s.length;
  const middleIndex = parseInt(s.length / 2, 10);

  return sLength % 2 === 0
    ? s[middleIndex - 1] + s[middleIndex]
    : s[middleIndex];
}
