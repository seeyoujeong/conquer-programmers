// 가운데 글자 가져오기

function solution(s) {
  const center = Math.floor((s.length - 1) / 2);
  return s.length % 2 ? s[center] : s.slice(center, center + 2);
}
