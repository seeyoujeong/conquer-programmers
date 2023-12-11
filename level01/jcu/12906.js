// 같은 숫자는 싫어

function solution(arr) {
  return arr.filter((num, idx, origin) => num !== origin[idx - 1]);
}
