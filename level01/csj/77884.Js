// 약수의 개수와 덧셈

const countDivider = (number) => {
  return Array.from({ length: number }).filter(
    (_, i) => number % (i + 1) === 0
  ).length;
};

function solution(left, right) {
  let answer = 0;
  for (let number = left; number <= right; number += 1) {
    const count = countDivider(number);
    if (count % 2) answer -= number;
    else answer += number;
  }
  return answer;
}
