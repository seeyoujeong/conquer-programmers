// 두 개 뽑아서 더하기

function solution(numbers) {
  return [
    ...new Set(
      numbers
        .slice(0, -1)
        .map((num1, idx) => numbers.slice(idx + 1).map((num2) => num1 + num2))
        .flat()
    ),
  ].sort((a, b) => a - b);
}
