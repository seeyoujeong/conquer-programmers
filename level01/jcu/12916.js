// 문자열 내 p와 y의 개수

function solution(s) {
  return s.replace(/p/gi, "").length === s.replace(/y/gi, "").length;
}
