// 예산

function solution(d, budget) {
  let count = 0;

  for (const money of d.sort((a, b) => a - b)) {
    if (budget - money < 0) {
      return count;
    }

    budget -= money;
    count += 1;
  }

  return count;
}
