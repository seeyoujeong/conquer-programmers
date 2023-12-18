// 최댓값과 최솟값

function solution(s) {
  const nums = s.split(' ').map(Number);
  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}
