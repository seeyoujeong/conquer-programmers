// 문자열 내 p와 y의 개수

function solution(s) {
  const lowerS = s.toLowerCase();
  return lowerS.split('p').length === lowerS.split('y').length;
}
