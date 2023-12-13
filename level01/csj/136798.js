// 기사단원의 무기

function solution(number, limit, power) {
  const divisorCounts = Array(number).fill(0);

  for (let i = 1; i <= number; i++) {
    for (let j = 1; i * j <= number; j++) {
      divisorCounts[i * j - 1]++;
    }
  }

  return divisorCounts.reduce(
    (sum, count) => sum + (count > limit ? power : count),
    0
  );
}
