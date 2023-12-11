// 제일 작은 수 제거하기

function solution(arr) {
  const minNumber = Math.min(...arr);
  arr.splice(arr.indexOf(minNumber), 1);
  return arr.length > 0 ? arr : [-1];
}
