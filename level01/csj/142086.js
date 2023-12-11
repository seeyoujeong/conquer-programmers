// 가장 가까운 같은 글자

function solution(s) {
  return Array.from({ length: s.length }).map((_, i) => {
    const index = [...s.slice(0, i)].lastIndexOf(s[i]);
    return index < 0 ? index : i - index;
  });
}
