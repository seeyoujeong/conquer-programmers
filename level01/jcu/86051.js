// 없는 숫자 더하기

function solution(numbers) {
  return Array.from({ length: 10 }, (_, idx) => idx)
    .filter((num) => !numbers.includes(num))
    .reduce((acc, cur) => acc + cur, 0);
}
