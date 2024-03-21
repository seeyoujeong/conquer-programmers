// 두 원 사이의 정수 쌍

function solution(r1, r2) {
  let result = 0;

  for (let x = 1; x <= r2; x += 1) {
    const maxY = Math.sqrt(r2 ** 2 - x ** 2);
    const minY = r1 > x ? Math.sqrt(r1 ** 2 - x ** 2) : 0;
    result += Math.floor(maxY) - Math.ceil(minY) + 1;
  }

  return result * 4;
}
