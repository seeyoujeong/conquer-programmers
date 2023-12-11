// 없는 숫자 더하기

function solution(numbers) {
  const totalNumbers = Array.from({ length: 10 }).map((_, i) => i);
  return totalNumbers.reduce(
    (answer, number) =>
      numbers.includes(number) ? answer : answer + number,
    0
  );
}
