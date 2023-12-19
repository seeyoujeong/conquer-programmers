// 최댓값과 최솟값

function solution(s) {
  const numberArray = s
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  return `${numberArray.at(0)} ${numberArray.at(-1)}`;
}
