// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  const result = arr.filter((num) => num % divisor === 0);
  return result.length ? result.sort((a, b) => a - b) : [-1];
}
