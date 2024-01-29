// 가장 큰 수

function solution(numbers) {
  const result = numbers
    .sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`))
    .join("");

  return result[0] === "0" ? "0" : result;
}
