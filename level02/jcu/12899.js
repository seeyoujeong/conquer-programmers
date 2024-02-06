// 124 나라의 숫자

function solution(n) {
  let result = [];

  while (n > 0) {
    if (n % 3 === 0) {
      result.push(4);
      n = Math.floor(n / 3) - 1;
    } else {
      result.push(n % 3);
      n = Math.floor(n / 3);
    }
  }

  return result.reverse().join("");
}
